const _ = require('lodash');

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
    if (pokemonTypes.length === 1) return getResultByType(pokemonTypes[0]);
    if (pokemonTypes.length === 2) return getResultByTypes(pokemonTypes);
  }

  return {};
};

module.exports = {
  fightAgainst,
};

function getPokemonNameToTypeMap() {
  return generationData.reduce((result, generation) => {
    return generation.reduce((acc, obj) => {
      acc[obj.name.toLowerCase()] = obj.types;
      return acc;
    }, result);
  }, {});
}

function getResultByType(type) {
  type = type.toLowerCase();
  const typeResult = effectiveMaps[type];
  const existingTypes = typeResult.superEffective.concat(typeResult.notVeryEffective).concat(typeResult.noEffect);
  typeResult.normal = _.difference(Object.keys(effectiveMaps), existingTypes);
  return typeResult;
}

function getResultByTypes(pokemonTypes) {
  const type1 = pokemonTypes[0];
  const type1Result = getResultByType(type1);
  const type2 = pokemonTypes[1];
  const type2Result = getResultByType(type2);
  const result = {};
  result.superEffective4 = _.intersection(type1Result.superEffective, type2Result.superEffective);
  result.superEffective = _.union(_.intersection(type1Result.superEffective, type2Result.normal), _.intersection(type2Result.superEffective, type1Result.normal));
  result.normal = _.union(_.intersection(type1Result.normal, type2Result.normal), _.intersection(type1Result.superEffective, type2Result.notVeryEffective), _.intersection(type1Result.notVeryEffective, type2Result.superEffective));
  result.notVeryEffective = _.union(_.intersection(type1Result.normal, type2Result.notVeryEffective), _.intersection(type1Result.notVeryEffective, type2Result.normal));
  result.notVeryEffective4 = _.intersection(type1Result.notVeryEffective, type2Result.notVeryEffective);
  result.noEffect = _.union(type1Result.noEffect, type2Result.noEffect);
  return result;
}