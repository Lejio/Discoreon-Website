type Type =
  | "Bug"
  | "Dark"
  | "Dragon"
  | "Electric"
  | "Fairy"
  | "Fighting"
  | "Fire"
  | "Flying"
  | "Ghost"
  | "Grass"
  | "Ground"
  | "Ice"
  | "Normal"
  | "Poison"
  | "Psychic"
  | "Rock"
  | "Steel"
  | "Water";

type AbilityData = {
  href: string;
  effect: string;
  hidden: boolean;
};

type Ability = {
  [Name: string]: AbilityData;
};

type PokedexData = {
  "National No.": string;
  Type: Type;
  Species: string;
  Height: string;
  Weight: string;
  Abilities: Ability[];
};

type TrainingData = {
  "EV yield": string;
  "Catch rate": string;
  BaseFriendship: string;
  "Base Exp.": string;
  "Growth Rate": string;
};

type BreedingData = {
  Gender: string;
};

type Stat = {
  Base: string;
  Min: string;
  Max: string;
};

type BaseStats = {
  HP: Stat;
  Attack: Stat;
  Defense: Stat;
  "Sp. Atk": Stat;
  "Sp. Def": Stat;
  Speed: Stat;
  Total: string;
};

type Effectiveness = "super-effective" | "no effect" | "not very effective";

type DefenseTypes = {
  [PokemonType: string]: Effectiveness;
};

type DefenseStats = {
  [Version: string]: DefenseTypes;
};

type Images = {
  discord_image: string;
  discord_sprite: string;
};

type PokemonData = {
  pokedex_data: PokedexData;
  training_data: TrainingData;
  breeding_data: BreedingData;
  base_stats: BaseStats;
  defense_stats: DefenseStats;
  images: Images;
};

type Version = {
  name: string;
  data: PokemonData;
};

type EvoPokemonType = {
  name: string;
  nationalNo: string;
  type: Type[];
  nickname: string | null;
};

type EvolutionChain = {
  from: EvoPokemonType;
  to: EvoPokemonType;
  requirement: string;
  shed: string | null;
};

type EvolutionChains = EvolutionChain[];

export type Pokemon = {
  versions: Version[];
  evo_stats: EvolutionChains[];
  attacks_data: any;
  entries: any;
  name: string;
};
