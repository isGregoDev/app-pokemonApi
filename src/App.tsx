import { useEffect, useState } from "react";
import usePokemonApi from "./hooks/usePokemonApi";
import {
  POKEMON_COLORS,
  POKEMON_LIGHT_COLORS,
} from "./constants/pokemonColors";
import { PokemonType } from "./types/pokemonTypes";

const App = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = usePokemonApi(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`
  );

  const [pokemonDetails, setPokemonDetails] = useState<any[]>([]);
  const [detailsLoading, setDetailsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (data && data.results) {
      const fetchPokemonDetails = async () => {
        const detailsPromises = data.results.map(async (pokemon: any) => {
          const response = await fetch(pokemon.url);
          return response.json();
        });
        const details = await Promise.all(detailsPromises);
        setPokemonDetails(details);
        setDetailsLoading(false);
      };

      fetchPokemonDetails();
    }
  }, [data]);

  if (loading || detailsLoading)
    return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="bg-white min-h-screen p-4">
      <h1 className="text-red-600 text-4xl font-extrabold text-center mb-6 ">
        Pokémon List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonDetails.length > 0 ? (
          pokemonDetails.map((pokemon) => {
            const typeName: PokemonType = pokemon.types[0].type.name;
            return (
              <div
                key={pokemon.name}
                className={`rounded-lg shadow-lg p-4 text-center transition-transform transform hover:scale-105 ${POKEMON_LIGHT_COLORS[typeName]}`}
              >
                <div
                  className={`absolute top-2 left-2 text-white text-sm font-bold rounded-full px-3 py-1 transition-all duration-300 ease-in-out transform hover:scale-110 ${POKEMON_COLORS[typeName]}`}
                >
                  {typeName.charAt(0).toUpperCase() + typeName.slice(1)}
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </h2>
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  className="mx-auto mb-2 w-32 h-32"
                />
                <div className="flex justify-center mb-2">
                  <img
                    src={pokemon.sprites.front_shiny}
                    alt={`${pokemon.name} shiny front`}
                    className="w-1/2 h-1/2 mx-1"
                  />
                  <img
                    src={pokemon.sprites.back_shiny}
                    alt={`${pokemon.name} shiny back`}
                    className="w-1/2 h-1/2 mx-1"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div>No Pokémon data available</div>
        )}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="bg-blue-500 text-white px-4 py-2 rounded-l transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105"
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-r transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
