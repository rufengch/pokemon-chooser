const effectiveMaps = require('./effectiveMap');

const fightAgainst = oponentType => effectiveMaps[oponentType];

// const getType = pokemonName => pokemonTypes[pokemonName];

module.exports = {
  // getType,
  fightAgainst,
};