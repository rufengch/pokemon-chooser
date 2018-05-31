const effectiveMaps = require('./effectiveMaps');

const fightAgainst = (oponentType) => {
  const types = effectiveMaps[oponentType];
  if (types.double.length) return types.double;
  if (types.half.length) return types.half;
  return types.zero;
};

module.export = {
  fightAgainstType,
};