const effectiveMaps = require('./effectiveMap');
const generation1 = require('./pokedex/generation-1');
const generation2 = require('./pokedex/generation-2');
const generation3 = require('./pokedex/generation-3');
const generation4 = require('./pokedex/generation-4');
const generation5 = require('./pokedex/generation-5');
const generation6 = require('./pokedex/generation-6');
const generation7 = require('./pokedex/generation-7');

const generationData = [
  generation1,
  generation2,
  generation3,
  generation4,
  generation5,
  generation6,
  generation7,
];

const getPokemonNameToTypeMap = () => {
  return generationData.reduce((result, generation) => {
    return generation.reduce((acc, obj) => {
      acc[obj.name.toLowerCase()] = obj.types;
      return acc;
    }, result);
  }, {});
};

const getResultByType = type => {
  const typeResult = effectiveMaps[type];
  const existingTypes = typeResult.superEffective.concat(typeResult.notVeryEffective).concat(typeResult.noEffect);
  typeResult.normal = Object.keys(effectiveMaps).filter(type => {
    return !existingTypes.includes(type);
  });
  return typeResult;
};

const fightAgainst = string => {
  // string should be a type or a pokomon's name
  if (!string) return {};
  
  string = string.toLowerCase();
  
  if (effectiveMaps[string]) {
    return getResultByType(string);
  }

  const pokemonNameToTypeMap = getPokemonNameToTypeMap();
  const pokemonTypes = pokemonNameToTypeMap[string];
  if (pokemonTypes) {
    if (pokemonTypes.length === 1) return getResultByType(pokemonTypes[0].toLowerCase());

    // the pokemon belongs to two types
  }

  return {};
};

module.exports = {
  fightAgainst,
};