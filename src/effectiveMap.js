const types = {
  normal: 'normal',
  fire: 'fire',
  water: 'water',
  electric: 'electric',
  grass: 'grass',
  ice: 'ice',
  fighting: 'fighting',
  poison: 'poison',
  ground: 'ground',
  flying: 'flying',
  psychic: 'psychic',
  bug: 'bug',
  rock: 'rock',
  ghost: 'ghost',
  dragon: 'dragon',
  dark: 'dark',
  steel: 'steel',
  fairy: 'fairy',
};

export const effectiveMaps = {
  [types.normal]: {
    double: [types.fighting], // fighting is super effective to normal
    half: [],
    zero: [types.ghost], // ghost has no effect to normal
  },
  [types.fire]: {
    double: [types.water, types.ground, types.rock],
    half: [types.fire, tyeps.grass, types.ice, types.bug, types.steel, types.fairy],
    zero: [''],
  },
  [types.water]: {
    double: [types.electric, types.grass],
    half: [types.fire, types.water, types.ice, types.steel],
    zero: [],
  },
  [types.electric]: {
    double: [types.ground],
    half: [types.electric, types.flying, types.steel],
    zero: [],
  },
  [types.grass]: {
    double: [types.fire, types.ice, types.poison, types.flying, types.bug],
    half: [types.water, types.electric, types.grass, types.ground],
    zero: [],
  },
  [types.ice]: {
    double: [types.fire, types.fighting, types.rock, types.steel],
    half: [types.ice],
    zero: [],
  },
  [types.fighting]: {
    double: [types.flying, types.psychic, types.fairy],
    half: [types.bug, types.rock, types.dark],
    zero: [],
  },
  [types.poison]: {
    double: [types.ground, types.psychic],
    half: [types.grass, types.fighting, types.poison],
    zero: [],
  },
  [types.ground]: {
    double: [types.water, types.grass, types.ice],
    half: [types.poison, types.rock],
    zero: [types.electric],
  },
  [types.flying]: {
    double: [types.electric, types.ice, types.rock],
    half: [types.grass, types.fighting, types.bug],
    zero: [types.ground],
  },
  [types.psychic]: {
    double: [types.bug, types.ghost, types.dark],
    half: [types.fighting, types.psychic],
    zero: [],
  },
  [types.bug]: {
    double: [types.fire, types.flying, types.rock],
    half: [types.grass, types.fighting, types.ground],
    zero: [],
  },
  [types.rock]: {
    double: [types.water, types.grass, types.fighting, types.ground, types.steel],
    half: [types.normal, types.fire, types.poison, types.flying],
    zero: [],
  },
  [types.ghost]: {
    double: [types.ghost, types.dark],
    half: [types.poison, types.bug],
    zero: [types.normal, types.fighting],
  },
  [types.dragon]: {
    double: [types.ice, types.dragon, types.fairy],
    half: [types.fire, types.water, types.electric, types.grass],
    zero: [],
  },
  [types.dark]: {
    double: [types.fighting, types.bug, types.fairy],
    half: [types.ghost, types.dark],
    zero: [types.psychic],
  },
  [types.steel]: {
    double: [types.fire, types.fighting, types.ground],
    half: [types.normal, types.grass, types.ice, types.flying, types.psychic, types.bug, types.rock, types.dragon, types.steel, types.fairy],
    zero: [types.poison],
  },
  [types.fairy]: {
    double: [types.poison, types.steel],
    half: [types.fighting, types.bug, types.dark],
    zero: [types.dragon],
  },
};