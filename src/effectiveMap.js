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
};