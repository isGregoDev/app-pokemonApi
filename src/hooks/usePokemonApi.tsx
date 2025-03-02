import { useEffect, useState } from "react";
import { PokemonResponse } from "../types/Pokemon";

const usePokemonApi = (url: string) => {
  const [data, setData] = useState<PokemonResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("La respuesta de la red no fue correcta");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default usePokemonApi;
