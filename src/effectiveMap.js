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

module.exports = {
  [types.normal]: {
    superEffective: [types.fighting], // fighting is super effective to normal
    notVeryEffective: [],
    noEffect: [types.ghost], // ghost has no effect to normal
  },
  [types.fire]: {
    superEffective: [types.water, types.ground, types.rock],
    notVeryEffective: [types.fire, types.grass, types.ice, types.bug, types.steel, types.fairy],
    noEffect: [],
  },
  [types.water]: {
    superEffective: [types.electric, types.grass],
    notVeryEffective: [types.fire, types.water, types.ice, types.steel],
    noEffect: [],
  },
  [types.electric]: {
    superEffective: [types.ground],
    notVeryEffective: [types.electric, types.flying, types.steel],
    noEffect: [],
  },
  [types.grass]: {
    superEffective: [types.fire, types.ice, types.poison, types.flying, types.bug],
    notVeryEffective: [types.water, types.electric, types.grass, types.ground],
    noEffect: [],
  },
  [types.ice]: {
    superEffective: [types.fire, types.fighting, types.rock, types.steel],
    notVeryEffective: [types.ice],
    noEffect: [],
  },
  [types.fighting]: {
    superEffective: [types.flying, types.psychic, types.fairy],
    notVeryEffective: [types.bug, types.rock, types.dark],
    noEffect: [],
  },
  [types.poison]: {
    superEffective: [types.ground, types.psychic],
    notVeryEffective: [types.grass, types.fighting, types.poison],
    noEffect: [],
  },
  [types.ground]: {
    superEffective: [types.water, types.grass, types.ice],
    notVeryEffective: [types.poison, types.rock],
    noEffect: [types.electric],
  },
  [types.flying]: {
    superEffective: [types.electric, types.ice, types.rock],
    notVeryEffective: [types.grass, types.fighting, types.bug],
    noEffect: [types.ground],
  },
  [types.psychic]: {
    superEffective: [types.bug, types.ghost, types.dark],
    notVeryEffective: [types.fighting, types.psychic],
    noEffect: [],
  },
  [types.bug]: {
    superEffective: [types.fire, types.flying, types.rock],
    notVeryEffective: [types.grass, types.fighting, types.ground],
    noEffect: [],
  },
  [types.rock]: {
    superEffective: [types.water, types.grass, types.fighting, types.ground, types.steel],
    notVeryEffective: [types.normal, types.fire, types.poison, types.flying],
    noEffect: [],
  },
  [types.ghost]: {
    superEffective: [types.ghost, types.dark],
    notVeryEffective: [types.poison, types.bug],
    noEffect: [types.normal, types.fighting],
  },
  [types.dragon]: {
    superEffective: [types.ice, types.dragon, types.fairy],
    notVeryEffective: [types.fire, types.water, types.electric, types.grass],
    noEffect: [],
  },
  [types.dark]: {
    superEffective: [types.fighting, types.bug, types.fairy],
    notVeryEffective: [types.ghost, types.dark],
    noEffect: [types.psychic],
  },
  [types.steel]: {
    superEffective: [types.fire, types.fighting, types.ground],
    notVeryEffective: [types.normal, types.grass, types.ice, types.flying, types.psychic, types.bug, types.rock, types.dragon, types.steel, types.fairy],
    noEffect: [types.poison],
  },
  [types.fairy]: {
    superEffective: [types.poison, types.steel],
    notVeryEffective: [types.fighting, types.bug, types.dark],
    noEffect: [types.dragon],
  },
};