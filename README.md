# pokemon-chooser

## The Problem

When playing pokemon games, to fight effectively, I usually
1. look for the type(s) of the opponent pokemon
2. find a pokemon type chart to find types that are super effective to the opponent type
3. look through pokemons in my team for a super effective move

The goal of this package is to make this process easier.

## Installation

Using npm:
```shell
$ npm i --save pokemon-chooser
```

## Usage

`fightAgainst(string)`

#### Arguments

string *(string)*: The name of a pokemon, or the name of a type

#### Returns

*(object)*: Returns an object containing super effective (2x or 4x), normal, not very effective (1/2 or 1/4), and no effect types.

## Reference

https://egghead.io/courses/how-to-write-an-open-source-javascript-library

pokemon types reference: https://pokemondb.net/type

> Note: this chart is for games from 2013 onwards - Pokémon X/Y, OR/AS, Pokémon GO and Sun/Moon. Type charts for older games have some minor differences.

pokedex data reference: https://github.com/piecioshka/pokemon-picker