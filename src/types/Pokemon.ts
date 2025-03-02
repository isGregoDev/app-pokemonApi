export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Type[];
  abilities: Ability[];
  baseExperience: number;
  stats: Stat[];
  sprites: Sprites;
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  isHidden: boolean;
  slot: number;
}

export interface Stat {
  baseStat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Sprites {
  frontDefault: string;
  frontShiny: string;
  backDefault: string;
  backShiny: string;
}

// Nueva interfaz para la respuesta de la API
export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
