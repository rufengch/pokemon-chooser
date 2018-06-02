const effectiveMaps = require('./effectiveMap');

const fightAgainst = oponentType => effectiveMaps[oponentType];

module.exports = {
  fightAgainst,
};