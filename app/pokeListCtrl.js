(function () {
  "use strict";

  angular
    .module('PokeDexApp')
    .controller('pokeListController', PokeListController);

  function PokeListController() {
    //controller logic
    var vm = this;

    vm.pokedex = [{
      'id': 1,
      'name': 'bulbasaur',
      'weight': 69,
      'attack': 49,
      'speed': 45,
      'hp': 45,
      'defense': 49,
      'type': ['poison', 'grass'],
      'moves': ['razor-wind', 'swords-dance', 'cut']
    }, {
      'id': 2,
      'name': 'ivysaur',
      'weight': 130,
      'attack': 62,
      'speed': 60,
      'hp': 60,
      'defense': 63,
      'type': ['poison', 'grass'],
      'moves': ['swords-dance', 'cut', 'bind']
    }, {
      'id': 3,
      'name': 'venusaur',
      'weight': 1000,
      'attack': 82,
      'speed': 80,
      'hp': 80,
      'defense': 83,
      'type': ['poison', 'grass'],
      'moves': ['swords-dance', 'cut', 'bind']
    }, {
      'id': 4,
      'name': 'charmander',
      'weight': 85,
      'attack': 52,
      'speed': 65,
      'hp': 39,
      'defense': 43,
      'type': ['fire'],
      'moves': ['mega-punch', 'fire-punch', 'thunder-punch']
    }, {
      'id': 5,
      'name': 'charmeleon',
      'weight': 190,
      'attack': 64,
      'speed': 80,
      'hp': 58,
      'defense': 58,
      'type': ['fire'],
      'moves': ['mega-punch', 'fire-punch', 'thunder-punch']
    }, {
      'id': 6,
      'name': 'charizard',
      'weight': 905,
      'attack': 84,
      'speed': 100,
      'hp': 78,
      'defense': 78,
      'type': ['flying', 'fire'],
      'moves': ['mega-punch', 'fire-punch', 'thunder-punch']
    }, {
      'id': 7,
      'name': 'squirtle',
      'weight': 90,
      'attack': 48,
      'speed': 43,
      'hp': 44,
      'defense': 65,
      'type': ['water'],
      'moves': ['mega-punch', 'ice-punch', 'mega-kick']
    }, {
      'id': 8,
      'name': 'wartortle',
      'weight': 225,
      'attack': 63,
      'speed': 58,
      'hp': 59,
      'defense': 80,
      'type': ['water'],
      'moves': ['mega-punch', 'ice-punch', 'mega-kick']
    }, {
      'id': 9,
      'name': 'blastoise',
      'weight': 855,
      'attack': 83,
      'speed': 78,
      'hp': 79,
      'defense': 100,
      'type': ['water'],
      'moves': ['mega-punch', 'ice-punch', 'mega-kick']
    }, {
      'id': 10,
      'name': 'caterpie',
      'weight': 29,
      'attack': 30,
      'speed': 45,
      'hp': 45,
      'defense': 35,
      'type': ['bug'],
      'moves': ['tackle', 'string-shot', 'snore']
    }, {
      'id': 11,
      'name': 'metapod',
      'weight': 99,
      'attack': 20,
      'speed': 30,
      'hp': 50,
      'defense': 55,
      'type': ['bug'],
      'moves': ['string-shot', 'harden', 'iron-defense']
    }, {
      'id': 12,
      'name': 'butterfree',
      'weight': 320,
      'attack': 45,
      'speed': 70,
      'hp': 60,
      'defense': 50,
      'type': ['flying', 'bug'],
      'moves': ['razor-wind', 'gust', 'whirlwind']
    }, {
      'id': 13,
      'name': 'weedle',
      'weight': 32,
      'attack': 35,
      'speed': 50,
      'hp': 40,
      'defense': 30,
      'type': ['poison', 'bug'],
      'moves': ['poison-sting', 'string-shot', 'bug-bite']
    }, {
      'id': 14,
      'name': 'kakuna',
      'weight': 100,
      'attack': 25,
      'speed': 35,
      'hp': 45,
      'defense': 50,
      'type': ['poison', 'bug'],
      'moves': ['string-shot', 'harden', 'iron-defense']
    }, {
      'id': 15,
      'name': 'beedrill',
      'weight': 295,
      'attack': 90,
      'speed': 75,
      'hp': 65,
      'defense': 40,
      'type': ['poison', 'bug'],
      'moves': ['swords-dance', 'cut', 'fury-attack']
    }, {
      'id': 16,
      'name': 'pidgey',
      'weight': 18,
      'attack': 45,
      'speed': 56,
      'hp': 40,
      'defense': 40,
      'type': ['flying', 'normal'],
      'moves': ['razor-wind', 'gust', 'wing-attack']
    }, {
      'id': 17,
      'name': 'pidgeotto',
      'weight': 300,
      'attack': 60,
      'speed': 71,
      'hp': 63,
      'defense': 55,
      'type': ['flying', 'normal'],
      'moves': ['razor-wind', 'gust', 'wing-attack']
    }, {
      'id': 18,
      'name': 'pidgeot',
      'weight': 395,
      'attack': 80,
      'speed': 101,
      'hp': 83,
      'defense': 75,
      'type': ['flying', 'normal'],
      'moves': ['razor-wind', 'gust', 'wing-attack']
    }, {
      'id': 19,
      'name': 'rattata',
      'weight': 35,
      'attack': 56,
      'speed': 72,
      'hp': 30,
      'defense': 35,
      'type': ['normal'],
      'moves': ['cut', 'headbutt', 'tackle']
    }, {
      'id': 20,
      'name': 'raticate',
      'weight': 185,
      'attack': 81,
      'speed': 97,
      'hp': 55,
      'defense': 60,
      'type': ['normal'],
      'moves': ['swords-dance', 'cut', 'headbutt']
    }, {
      'id': 21,
      'name': 'spearow',
      'weight': 20,
      'attack': 60,
      'speed': 70,
      'hp': 40,
      'defense': 30,
      'type': ['flying', 'normal'],
      'moves': ['razor-wind', 'whirlwind', 'fly']
    }, {
      'id': 22,
      'name': 'fearow',
      'weight': 380,
      'attack': 90,
      'speed': 100,
      'hp': 65,
      'defense': 65,
      'type': ['flying', 'normal'],
      'moves': ['razor-wind', 'whirlwind', 'fly']
    }, {
      'id': 23,
      'name': 'ekans',
      'weight': 69,
      'attack': 60,
      'speed': 55,
      'hp': 35,
      'defense': 44,
      'type': ['poison'],
      'moves': ['bind', 'slam', 'headbutt']
    }, {
      'id': 24,
      'name': 'arbok',
      'weight': 650,
      'attack': 85,
      'speed': 80,
      'hp': 60,
      'defense': 69,
      'type': ['poison'],
      'moves': ['bind', 'headbutt', 'body-slam']
    }, {
      'id': 25,
      'name': 'pikachu',
      'weight': 60,
      'attack': 55,
      'speed': 90,
      'hp': 35,
      'defense': 40,
      'type': ['electric'],
      'moves': ['mega-punch', 'pay-day', 'thunder-punch']
    }, {
      'id': 26,
      'name': 'raichu',
      'weight': 300,
      'attack': 90,
      'speed': 110,
      'hp': 60,
      'defense': 55,
      'type': ['electric'],
      'moves': ['mega-punch', 'pay-day', 'thunder-punch']
    }, {
      'id': 27,
      'name': 'sandshrew',
      'weight': 120,
      'attack': 75,
      'speed': 40,
      'hp': 50,
      'defense': 85,
      'type': ['ground'],
      'moves': ['scratch', 'swords-dance', 'cut']
    }, {
      'id': 28,
      'name': 'sandslash',
      'weight': 295,
      'attack': 100,
      'speed': 65,
      'hp': 75,
      'defense': 110,
      'type': ['ground'],
      'moves': ['scratch', 'swords-dance', 'cut']
    }, {
      'id': 29,
      'name': 'nidoran-f',
      'weight': 70,
      'attack': 47,
      'speed': 41,
      'hp': 55,
      'defense': 52,
      'type': ['poison'],
      'moves': ['scratch', 'cut', 'double-kick']
    }, {
      'id': 30,
      'name': 'nidorina',
      'weight': 200,
      'attack': 62,
      'speed': 56,
      'hp': 70,
      'defense': 67,
      'type': ['poison'],
      'moves': ['scratch', 'cut', 'double-kick']
    }, {
      'id': 31,
      'name': 'nidoqueen',
      'weight': 600,
      'attack': 92,
      'speed': 76,
      'hp': 90,
      'defense': 87,
      'type': ['ground', 'poison'],
      'moves': ['mega-punch', 'pay-day', 'fire-punch']
    }, {
      'id': 32,
      'name': 'nidoran-m',
      'weight': 90,
      'attack': 57,
      'speed': 50,
      'hp': 46,
      'defense': 40,
      'type': ['poison'],
      'moves': ['cut', 'double-kick', 'headbutt']
    }, {
      'id': 33,
      'name': 'nidorino',
      'weight': 195,
      'attack': 72,
      'speed': 65,
      'hp': 61,
      'defense': 57,
      'type': ['poison'],
      'moves': ['cut', 'double-kick', 'headbutt']
    }, {
      'id': 34,
      'name': 'nidoking',
      'weight': 620,
      'attack': 102,
      'speed': 85,
      'hp': 81,
      'defense': 77,
      'type': ['ground', 'poison'],
      'moves': ['mega-punch', 'pay-day', 'fire-punch']
    }, {
      'id': 35,
      'name': 'clefairy',
      'weight': 75,
      'attack': 45,
      'speed': 35,
      'hp': 70,
      'defense': 48,
      'type': ['fairy'],
      'moves': ['pound', 'double-slap', 'mega-punch']
    }, {
      'id': 36,
      'name': 'clefable',
      'weight': 400,
      'attack': 70,
      'speed': 60,
      'hp': 95,
      'defense': 73,
      'type': ['fairy'],
      'moves': ['double-slap', 'mega-punch', 'fire-punch']
    }, {
      'id': 37,
      'name': 'vulpix',
      'weight': 99,
      'attack': 41,
      'speed': 65,
      'hp': 38,
      'defense': 40,
      'type': ['fire'],
      'moves': ['headbutt', 'body-slam', 'take-down']
    }, {
      'id': 38,
      'name': 'ninetales',
      'weight': 199,
      'attack': 76,
      'speed': 100,
      'hp': 73,
      'defense': 75,
      'type': ['fire'],
      'moves': ['headbutt', 'body-slam', 'take-down']
    }, {
      'id': 39,
      'name': 'jigglypuff',
      'weight': 55,
      'attack': 45,
      'speed': 20,
      'hp': 115,
      'defense': 20,
      'type': ['fairy', 'normal'],
      'moves': ['pound', 'double-slap', 'mega-punch']
    }, {
      'id': 40,
      'name': 'wigglytuff',
      'weight': 120,
      'attack': 70,
      'speed': 45,
      'hp': 140,
      'defense': 45,
      'type': ['fairy', 'normal'],
      'moves': ['double-slap', 'mega-punch', 'fire-punch']
    }, {
      'id': 41,
      'name': 'zubat',
      'weight': 75,
      'attack': 45,
      'speed': 55,
      'hp': 40,
      'defense': 35,
      'type': ['flying', 'poison'],
      'moves': ['razor-wind', 'gust', 'wing-attack']
    }, {
      'id': 42,
      'name': 'golbat',
      'weight': 550,
      'attack': 80,
      'speed': 90,
      'hp': 75,
      'defense': 70,
      'type': ['flying', 'poison'],
      'moves': ['razor-wind', 'wing-attack', 'whirlwind']
    }, {
      'id': 43,
      'name': 'oddish',
      'weight': 54,
      'attack': 50,
      'speed': 30,
      'hp': 45,
      'defense': 55,
      'type': ['poison', 'grass'],
      'moves': ['swords-dance', 'cut', 'take-down']
    }, {
      'id': 44,
      'name': 'gloom',
      'weight': 86,
      'attack': 65,
      'speed': 40,
      'hp': 60,
      'defense': 70,
      'type': ['poison', 'grass'],
      'moves': ['swords-dance', 'cut', 'take-down']
    }, {
      'id': 45,
      'name': 'vileplume',
      'weight': 186,
      'attack': 80,
      'speed': 50,
      'hp': 75,
      'defense': 85,
      'type': ['poison', 'grass'],
      'moves': ['swords-dance', 'cut', 'body-slam']
    }, {
      'id': 46,
      'name': 'paras',
      'weight': 54,
      'attack': 70,
      'speed': 25,
      'hp': 35,
      'defense': 55,
      'type': ['grass', 'bug'],
      'moves': ['scratch', 'swords-dance', 'cut']
    }, {
      'id': 47,
      'name': 'parasect',
      'weight': 295,
      'attack': 95,
      'speed': 30,
      'hp': 60,
      'defense': 80,
      'type': ['grass', 'bug'],
      'moves': ['scratch', 'swords-dance', 'cut']
    }, {
      'id': 48,
      'name': 'venonat',
      'weight': 300,
      'attack': 55,
      'speed': 45,
      'hp': 60,
      'defense': 50,
      'type': ['poison', 'bug'],
      'moves': ['tackle', 'take-down', 'double-edge']
    }, {
      'id': 49,
      'name': 'venomoth',
      'weight': 125,
      'attack': 65,
      'speed': 90,
      'hp': 70,
      'defense': 60,
      'type': ['poison', 'bug'],
      'moves': ['razor-wind', 'gust', 'whirlwind']
    }, {
      'id': 50,
      'name': 'diglett',
      'weight': 8,
      'attack': 55,
      'speed': 95,
      'hp': 10,
      'defense': 25,
      'type': ['ground'],
      'moves': ['scratch', 'cut', 'sand-attack']
    }, {
      'id': 51,
      'name': 'dugtrio',
      'weight': 333,
      'attack': 80,
      'speed': 120,
      'hp': 35,
      'defense': 50,
      'type': ['ground'],
      'moves': ['scratch', 'cut', 'sand-attack']
    }, {
      'id': 52,
      'name': 'meowth',
      'weight': 42,
      'attack': 45,
      'speed': 90,
      'hp': 40,
      'defense': 35,
      'type': ['normal'],
      'moves': ['pay-day', 'scratch', 'cut']
    }, {
      'id': 53,
      'name': 'persian',
      'weight': 320,
      'attack': 70,
      'speed': 115,
      'hp': 65,
      'defense': 60,
      'type': ['normal'],
      'moves': ['pay-day', 'scratch', 'cut']
    }, {
      'id': 54,
      'name': 'psyduck',
      'weight': 196,
      'attack': 52,
      'speed': 55,
      'hp': 50,
      'defense': 48,
      'type': ['water'],
      'moves': ['mega-punch', 'pay-day', 'ice-punch']
    }, {
      'id': 55,
      'name': 'golduck',
      'weight': 766,
      'attack': 82,
      'speed': 85,
      'hp': 80,
      'defense': 78,
      'type': ['water'],
      'moves': ['mega-punch', 'pay-day', 'ice-punch']
    }, {
      'id': 56,
      'name': 'mankey',
      'weight': 280,
      'attack': 80,
      'speed': 70,
      'hp': 40,
      'defense': 35,
      'type': ['fighting'],
      'moves': ['karate-chop', 'mega-punch', 'pay-day']
    }, {
      'id': 57,
      'name': 'primeape',
      'weight': 320,
      'attack': 105,
      'speed': 95,
      'hp': 65,
      'defense': 60,
      'type': ['fighting'],
      'moves': ['karate-chop', 'mega-punch', 'pay-day']
    }, {
      'id': 58,
      'name': 'growlithe',
      'weight': 190,
      'attack': 70,
      'speed': 60,
      'hp': 55,
      'defense': 45,
      'type': ['fire'],
      'moves': ['double-kick', 'headbutt', 'body-slam']
    }, {
      'id': 59,
      'name': 'arcanine',
      'weight': 1550,
      'attack': 110,
      'speed': 95,
      'hp': 90,
      'defense': 80,
      'type': ['fire'],
      'moves': ['headbutt', 'body-slam', 'take-down']
    }, {
      'id': 60,
      'name': 'poliwag',
      'weight': 124,
      'attack': 50,
      'speed': 90,
      'hp': 40,
      'defense': 40,
      'type': ['water'],
      'moves': ['double-slap', 'headbutt', 'body-slam']
    }, {
      'id': 61,
      'name': 'poliwhirl',
      'weight': 200,
      'attack': 65,
      'speed': 90,
      'hp': 65,
      'defense': 65,
      'type': ['water'],
      'moves': ['double-slap', 'mega-punch', 'ice-punch']
    }, {
      'id': 62,
      'name': 'poliwrath',
      'weight': 540,
      'attack': 95,
      'speed': 70,
      'hp': 90,
      'defense': 95,
      'type': ['fighting', 'water'],
      'moves': ['double-slap', 'mega-punch', 'ice-punch']
    }, {
      'id': 63,
      'name': 'abra',
      'weight': 195,
      'attack': 20,
      'speed': 90,
      'hp': 25,
      'defense': 15,
      'type': ['psychic'],
      'moves': ['mega-punch', 'fire-punch', 'ice-punch']
    }, {
      'id': 64,
      'name': 'kadabra',
      'weight': 565,
      'attack': 35,
      'speed': 105,
      'hp': 40,
      'defense': 30,
      'type': ['psychic'],
      'moves': ['mega-punch', 'fire-punch', 'ice-punch']
    }, {
      'id': 65,
      'name': 'alakazam',
      'weight': 480,
      'attack': 50,
      'speed': 120,
      'hp': 55,
      'defense': 45,
      'type': ['psychic'],
      'moves': ['mega-punch', 'fire-punch', 'ice-punch']
    }, {
      'id': 66,
      'name': 'machop',
      'weight': 195,
      'attack': 80,
      'speed': 35,
      'hp': 70,
      'defense': 50,
      'type': ['fighting'],
      'moves': ['karate-chop', 'mega-punch', 'fire-punch']
    }, {
      'id': 67,
      'name': 'machoke',
      'weight': 705,
      'attack': 100,
      'speed': 45,
      'hp': 80,
      'defense': 70,
      'type': ['fighting'],
      'moves': ['karate-chop', 'mega-punch', 'fire-punch']
    }, {
      'id': 68,
      'name': 'machamp',
      'weight': 1300,
      'attack': 130,
      'speed': 55,
      'hp': 90,
      'defense': 80,
      'type': ['fighting'],
      'moves': ['karate-chop', 'mega-punch', 'fire-punch']
    }, {
      'id': 69,
      'name': 'bellsprout',
      'weight': 40,
      'attack': 75,
      'speed': 40,
      'hp': 50,
      'defense': 35,
      'type': ['poison', 'grass'],
      'moves': ['swords-dance', 'cut', 'bind']
    }, {
      'id': 70,
      'name': 'weepinbell',
      'weight': 64,
      'attack': 90,
      'speed': 55,
      'hp': 65,
      'defense': 50,
      'type': ['poison', 'grass'],
      'moves': ['swords-dance', 'cut', 'bind']
    }, {
      'id': 71,
      'name': 'victreebel',
      'weight': 155,
      'attack': 105,
      'speed': 70,
      'hp': 80,
      'defense': 65,
      'type': ['poison', 'grass'],
      'moves': ['swords-dance', 'cut', 'bind']
    }, {
      'id': 72,
      'name': 'tentacool',
      'weight': 455,
      'attack': 40,
      'speed': 70,
      'hp': 40,
      'defense': 35,
      'type': ['poison', 'water'],
      'moves': ['swords-dance', 'cut', 'bind']
    }, {
      'id': 73,
      'name': 'tentacruel',
      'weight': 550,
      'attack': 70,
      'speed': 100,
      'hp': 80,
      'defense': 65,
      'type': ['poison', 'water'],
      'moves': ['swords-dance', 'cut', 'bind']
    }, {
      'id': 74,
      'name': 'geodude',
      'weight': 200,
      'attack': 80,
      'speed': 20,
      'hp': 40,
      'defense': 100,
      'type': ['ground', 'rock'],
      'moves': ['mega-punch', 'fire-punch', 'thunder-punch']
    }, {
      'id': 75,
      'name': 'graveler',
      'weight': 1050,
      'attack': 95,
      'speed': 35,
      'hp': 55,
      'defense': 115,
      'type': ['ground', 'rock'],
      'moves': ['mega-punch', 'fire-punch', 'thunder-punch']
    }, {
      'id': 76,
      'name': 'golem',
      'weight': 3000,
      'attack': 120,
      'speed': 45,
      'hp': 80,
      'defense': 130,
      'type': ['ground', 'rock'],
      'moves': ['mega-punch', 'fire-punch', 'thunder-punch']
    }, {
      'id': 77,
      'name': 'ponyta',
      'weight': 300,
      'attack': 85,
      'speed': 90,
      'hp': 50,
      'defense': 55,
      'type': ['fire'],
      'moves': ['stomp', 'double-kick', 'headbutt']
    }, {
      'id': 78,
      'name': 'rapidash',
      'weight': 950,
      'attack': 100,
      'speed': 105,
      'hp': 65,
      'defense': 70,
      'type': ['fire'],
      'moves': ['stomp', 'headbutt', 'fury-attack']
    }, {
      'id': 79,
      'name': 'slowpoke',
      'weight': 360,
      'attack': 65,
      'speed': 15,
      'hp': 90,
      'defense': 65,
      'type': ['psychic', 'water'],
      'moves': ['pay-day', 'stomp', 'headbutt']
    }, {
      'id': 80,
      'name': 'slowbro',
      'weight': 785,
      'attack': 75,
      'speed': 30,
      'hp': 95,
      'defense': 110,
      'type': ['psychic', 'water'],
      'moves': ['mega-punch', 'pay-day', 'ice-punch']
    }, {
      'id': 81,
      'name': 'magnemite',
      'weight': 60,
      'attack': 35,
      'speed': 45,
      'hp': 25,
      'defense': 70,
      'type': ['steel', 'electric'],
      'moves': ['tackle', 'take-down', 'double-edge']
    }, {
      'id': 82,
      'name': 'magneton',
      'weight': 600,
      'attack': 60,
      'speed': 70,
      'hp': 50,
      'defense': 95,
      'type': ['steel', 'electric'],
      'moves': ['tackle', 'take-down', 'double-edge']
    }, {
      'id': 83,
      'name': 'farfetchd',
      'weight': 150,
      'attack': 65,
      'speed': 60,
      'hp': 52,
      'defense': 55,
      'type': ['flying', 'normal'],
      'moves': ['razor-wind', 'swords-dance', 'cut']
    }, {
      'id': 84,
      'name': 'doduo',
      'weight': 392,
      'attack': 85,
      'speed': 75,
      'hp': 35,
      'defense': 45,
      'type': ['flying', 'normal'],
      'moves': ['whirlwind', 'fly', 'fury-attack']
    }, {
      'id': 85,
      'name': 'dodrio',
      'weight': 852,
      'attack': 110,
      'speed': 100,
      'hp': 60,
      'defense': 70,
      'type': ['flying', 'normal'],
      'moves': ['whirlwind', 'fly', 'fury-attack']
    }, {
      'id': 86,
      'name': 'seel',
      'weight': 900,
      'attack': 45,
      'speed': 45,
      'hp': 65,
      'defense': 55,
      'type': ['water'],
      'moves': ['pay-day', 'slam', 'headbutt']
    }, {
      'id': 87,
      'name': 'dewgong',
      'weight': 1200,
      'attack': 70,
      'speed': 70,
      'hp': 90,
      'defense': 80,
      'type': ['ice', 'water'],
      'moves': ['pay-day', 'headbutt', 'horn-drill']
    }, {
      'id': 88,
      'name': 'grimer',
      'weight': 300,
      'attack': 80,
      'speed': 25,
      'hp': 80,
      'defense': 50,
      'type': ['poison'],
      'moves': ['pound', 'fire-punch', 'ice-punch']
    }, {
      'id': 89,
      'name': 'muk',
      'weight': 300,
      'attack': 105,
      'speed': 50,
      'hp': 105,
      'defense': 75,
      'type': ['poison'],
      'moves': ['pound', 'fire-punch', 'ice-punch']
    }, {
      'id': 90,
      'name': 'shellder',
      'weight': 40,
      'attack': 65,
      'speed': 40,
      'hp': 30,
      'defense': 100,
      'type': ['water'],
      'moves': ['tackle', 'take-down', 'double-edge']
    }, {
      'id': 91,
      'name': 'cloyster',
      'weight': 1325,
      'attack': 95,
      'speed': 70,
      'hp': 50,
      'defense': 180,
      'type': ['ice', 'water'],
      'moves': ['take-down', 'double-edge', 'supersonic']
    }, {
      'id': 92,
      'name': 'gastly',
      'weight': 1,
      'attack': 35,
      'speed': 80,
      'hp': 30,
      'defense': 30,
      'type': ['poison', 'ghost'],
      'moves': ['fire-punch', 'ice-punch', 'thunder-punch']
    }, {
      'id': 93,
      'name': 'haunter',
      'weight': 1,
      'attack': 50,
      'speed': 95,
      'hp': 45,
      'defense': 45,
      'type': ['poison', 'ghost'],
      'moves': ['fire-punch', 'ice-punch', 'thunder-punch']
    }, {
      'id': 94,
      'name': 'gengar',
      'weight': 405,
      'attack': 65,
      'speed': 110,
      'hp': 60,
      'defense': 60,
      'type': ['poison', 'ghost'],
      'moves': ['mega-punch', 'fire-punch', 'ice-punch']
    }, {
      'id': 95,
      'name': 'onix',
      'weight': 2100,
      'attack': 45,
      'speed': 70,
      'hp': 35,
      'defense': 160,
      'type': ['ground', 'rock'],
      'moves': ['bind', 'slam', 'headbutt']
    }, {
      'id': 96,
      'name': 'drowzee',
      'weight': 324,
      'attack': 48,
      'speed': 42,
      'hp': 60,
      'defense': 45,
      'type': ['psychic'],
      'moves': ['pound', 'mega-punch', 'fire-punch']
    }, {
      'id': 97,
      'name': 'hypno',
      'weight': 756,
      'attack': 73,
      'speed': 67,
      'hp': 85,
      'defense': 70,
      'type': ['psychic'],
      'moves': ['pound', 'mega-punch', 'fire-punch']
    }, {
      'id': 98,
      'name': 'krabby',
      'weight': 65,
      'attack': 105,
      'speed': 50,
      'hp': 30,
      'defense': 90,
      'type': ['water'],
      'moves': ['vice-grip', 'guillotine', 'swords-dance']
    }, {
      'id': 99,
      'name': 'kingler',
      'weight': 600,
      'attack': 130,
      'speed': 75,
      'hp': 55,
      'defense': 115,
      'type': ['water'],
      'moves': ['vice-grip', 'guillotine', 'swords-dance']
    }, {
      'id': 100,
      'name': 'voltorb',
      'weight': 104,
      'attack': 30,
      'speed': 100,
      'hp': 40,
      'defense': 50,
      'type': ['electric'],
      'moves': ['headbutt', 'tackle', 'take-down']
    }, {
      'id': 101,
      'name': 'electrode',
      'weight': 666,
      'attack': 50,
      'speed': 140,
      'hp': 60,
      'defense': 70,
      'type': ['electric'],
      'moves': ['headbutt', 'tackle', 'take-down']
    }, {
      'id': 102,
      'name': 'exeggcute',
      'weight': 25,
      'attack': 40,
      'speed': 40,
      'hp': 60,
      'defense': 80,
      'type': ['psychic', 'grass'],
      'moves': ['swords-dance', 'take-down', 'double-edge']
    }, {
      'id': 103,
      'name': 'exeggutor',
      'weight': 1200,
      'attack': 95,
      'speed': 55,
      'hp': 95,
      'defense': 85,
      'type': ['psychic', 'grass'],
      'moves': ['swords-dance', 'stomp', 'headbutt']
    }, {
      'id': 104,
      'name': 'cubone',
      'weight': 65,
      'attack': 50,
      'speed': 35,
      'hp': 50,
      'defense': 95,
      'type': ['ground'],
      'moves': ['mega-punch', 'fire-punch', 'thunder-punch']
    }, {
      'id': 105,
      'name': 'marowak',
      'weight': 450,
      'attack': 80,
      'speed': 45,
      'hp': 60,
      'defense': 110,
      'type': ['ground'],
      'moves': ['mega-punch', 'fire-punch', 'thunder-punch']
    }, {
      'id': 106,
      'name': 'hitmonlee',
      'weight': 498,
      'attack': 120,
      'speed': 87,
      'hp': 50,
      'defense': 53,
      'type': ['fighting'],
      'moves': ['mega-punch', 'double-kick', 'mega-kick']
    }, {
      'id': 107,
      'name': 'hitmonchan',
      'weight': 502,
      'attack': 105,
      'speed': 76,
      'hp': 50,
      'defense': 79,
      'type': ['fighting'],
      'moves': ['comet-punch', 'mega-punch', 'fire-punch']
    }, {
      'id': 108,
      'name': 'lickitung',
      'weight': 655,
      'attack': 55,
      'speed': 30,
      'hp': 90,
      'defense': 75,
      'type': ['normal'],
      'moves': ['mega-punch', 'fire-punch', 'ice-punch']
    }, {
      'id': 109,
      'name': 'koffing',
      'weight': 10,
      'attack': 65,
      'speed': 35,
      'hp': 40,
      'defense': 95,
      'type': ['poison'],
      'moves': ['tackle', 'flamethrower', 'psybeam']
    }, {
      'id': 110,
      'name': 'weezing',
      'weight': 95,
      'attack': 90,
      'speed': 60,
      'hp': 65,
      'defense': 120,
      'type': ['poison'],
      'moves': ['tackle', 'flamethrower', 'hyper-beam']
    }, {
      'id': 111,
      'name': 'rhyhorn',
      'weight': 1150,
      'attack': 85,
      'speed': 25,
      'hp': 80,
      'defense': 95,
      'type': ['rock', 'ground'],
      'moves': ['swords-dance', 'stomp', 'headbutt']
    }, {
      'id': 112,
      'name': 'rhydon',
      'weight': 1200,
      'attack': 130,
      'speed': 40,
      'hp': 105,
      'defense': 120,
      'type': ['rock', 'ground'],
      'moves': ['mega-punch', 'pay-day', 'fire-punch']
    }, {
      'id': 113,
      'name': 'chansey',
      'weight': 346,
      'attack': 5,
      'speed': 50,
      'hp': 250,
      'defense': 5,
      'type': ['normal'],
      'moves': ['pound', 'double-slap', 'mega-punch']
    }, {
      'id': 114,
      'name': 'tangela',
      'weight': 350,
      'attack': 55,
      'speed': 60,
      'hp': 65,
      'defense': 115,
      'type': ['grass'],
      'moves': ['swords-dance', 'cut', 'bind']
    }, {
      'id': 115,
      'name': 'kangaskhan',
      'weight': 800,
      'attack': 95,
      'speed': 90,
      'hp': 105,
      'defense': 80,
      'type': ['normal'],
      'moves': ['comet-punch', 'mega-punch', 'fire-punch']
    }, {
      'id': 116,
      'name': 'horsea',
      'weight': 80,
      'attack': 40,
      'speed': 60,
      'hp': 30,
      'defense': 70,
      'type': ['water'],
      'moves': ['razor-wind', 'headbutt', 'take-down']
    }, {
      'id': 117,
      'name': 'seadra',
      'weight': 250,
      'attack': 65,
      'speed': 85,
      'hp': 55,
      'defense': 95,
      'type': ['water'],
      'moves': ['headbutt', 'take-down', 'double-edge']
    }, {
      'id': 118,
      'name': 'goldeen',
      'weight': 150,
      'attack': 67,
      'speed': 63,
      'hp': 45,
      'defense': 60,
      'type': ['water'],
      'moves': ['horn-attack', 'fury-attack', 'horn-drill']
    }, {
      'id': 119,
      'name': 'seaking',
      'weight': 390,
      'attack': 92,
      'speed': 68,
      'hp': 80,
      'defense': 65,
      'type': ['water'],
      'moves': ['horn-attack', 'fury-attack', 'horn-drill']
    }, {
      'id': 120,
      'name': 'staryu',
      'weight': 345,
      'attack': 45,
      'speed': 85,
      'hp': 30,
      'defense': 55,
      'type': ['water'],
      'moves': ['tackle', 'take-down', 'double-edge']
    }, {
      'id': 121,
      'name': 'starmie',
      'weight': 800,
      'attack': 75,
      'speed': 115,
      'hp': 60,
      'defense': 85,
      'type': ['psychic', 'water'],
      'moves': ['tackle', 'take-down', 'double-edge']
    }, {
      'id': 122,
      'name': 'mr-mime',
      'weight': 545,
      'attack': 45,
      'speed': 90,
      'hp': 40,
      'defense': 65,
      'type': ['fairy', 'psychic'],
      'moves': ['double-slap', 'mega-punch', 'fire-punch']
    }, {
      'id': 123,
      'name': 'scyther',
      'weight': 560,
      'attack': 110,
      'speed': 105,
      'hp': 70,
      'defense': 80,
      'type': ['flying', 'bug'],
      'moves': ['razor-wind', 'swords-dance', 'cut']
    }, {
      'id': 124,
      'name': 'jynx',
      'weight': 406,
      'attack': 50,
      'speed': 95,
      'hp': 65,
      'defense': 35,
      'type': ['psychic', 'ice'],
      'moves': ['pound', 'double-slap', 'mega-punch']
    }, {
      'id': 125,
      'name': 'electabuzz',
      'weight': 300,
      'attack': 83,
      'speed': 105,
      'hp': 65,
      'defense': 57,
      'type': ['electric'],
      'moves': ['mega-punch', 'fire-punch', 'ice-punch']
    }, {
      'id': 126,
      'name': 'magmar',
      'weight': 445,
      'attack': 95,
      'speed': 93,
      'hp': 65,
      'defense': 57,
      'type': ['fire'],
      'moves': ['mega-punch', 'fire-punch', 'thunder-punch']
    }, {
      'id': 127,
      'name': 'pinsir',
      'weight': 550,
      'attack': 125,
      'speed': 85,
      'hp': 65,
      'defense': 100,
      'type': ['bug'],
      'moves': ['vice-grip', 'guillotine', 'swords-dance']
    }, {
      'id': 128,
      'name': 'tauros',
      'weight': 884,
      'attack': 100,
      'speed': 110,
      'hp': 75,
      'defense': 95,
      'type': ['normal'],
      'moves': ['stomp', 'headbutt', 'horn-attack']
    }, {
      'id': 129,
      'name': 'magikarp',
      'weight': 100,
      'attack': 10,
      'speed': 80,
      'hp': 20,
      'defense': 55,
      'type': ['water'],
      'moves': ['tackle', 'splash', 'flail']
    }, {
      'id': 130,
      'name': 'gyarados',
      'weight': 2350,
      'attack': 125,
      'speed': 81,
      'hp': 95,
      'defense': 79,
      'type': ['flying', 'water'],
      'moves': ['headbutt', 'tackle', 'body-slam']
    }, {
      'id': 131,
      'name': 'lapras',
      'weight': 2200,
      'attack': 85,
      'speed': 60,
      'hp': 130,
      'defense': 80,
      'type': ['ice', 'water'],
      'moves': ['headbutt', 'horn-drill', 'body-slam']
    }, {
      'id': 132,
      'name': 'ditto',
      'weight': 40,
      'attack': 48,
      'speed': 48,
      'hp': 48,
      'defense': 48,
      'type': ['normal'],
      'moves': ['transform']
    }, {
      'id': 133,
      'name': 'eevee',
      'weight': 65,
      'attack': 55,
      'speed': 55,
      'hp': 55,
      'defense': 50,
      'type': ['normal'],
      'moves': ['sand-attack', 'headbutt', 'tackle']
    }, {
      'id': 134,
      'name': 'vaporeon',
      'weight': 290,
      'attack': 65,
      'speed': 65,
      'hp': 130,
      'defense': 60,
      'type': ['water'],
      'moves': ['sand-attack', 'headbutt', 'tackle']
    }, {
      'id': 135,
      'name': 'jolteon',
      'weight': 245,
      'attack': 65,
      'speed': 130,
      'hp': 65,
      'defense': 60,
      'type': ['electric'],
      'moves': ['double-kick', 'sand-attack', 'headbutt']
    }, {
      'id': 136,
      'name': 'flareon',
      'weight': 250,
      'attack': 130,
      'speed': 65,
      'hp': 65,
      'defense': 60,
      'type': ['fire'],
      'moves': ['sand-attack', 'headbutt', 'tackle']
    }, {
      'id': 137,
      'name': 'porygon',
      'weight': 365,
      'attack': 60,
      'speed': 40,
      'hp': 65,
      'defense': 70,
      'type': ['normal'],
      'moves': ['tackle', 'take-down', 'double-edge']
    }, {
      'id': 138,
      'name': 'omanyte',
      'weight': 75,
      'attack': 40,
      'speed': 35,
      'hp': 35,
      'defense': 100,
      'type': ['water', 'rock'],
      'moves': ['bind', 'slam', 'headbutt']
    }, {
      'id': 139,
      'name': 'omastar',
      'weight': 350,
      'attack': 60,
      'speed': 55,
      'hp': 70,
      'defense': 125,
      'type': ['water', 'rock'],
      'moves': ['bind', 'headbutt', 'horn-attack']
    }, {
      'id': 140,
      'name': 'kabuto',
      'weight': 115,
      'attack': 80,
      'speed': 55,
      'hp': 30,
      'defense': 90,
      'type': ['water', 'rock'],
      'moves': ['scratch', 'sand-attack', 'body-slam']
    }, {
      'id': 141,
      'name': 'kabutops',
      'weight': 405,
      'attack': 115,
      'speed': 80,
      'hp': 60,
      'defense': 105,
      'type': ['water', 'rock'],
      'moves': ['scratch', 'razor-wind', 'swords-dance']
    }, {
      'id': 142,
      'name': 'aerodactyl',
      'weight': 590,
      'attack': 105,
      'speed': 130,
      'hp': 80,
      'defense': 65,
      'type': ['flying', 'rock'],
      'moves': ['razor-wind', 'wing-attack', 'whirlwind']
    }, {
      'id': 143,
      'name': 'snorlax',
      'weight': 4600,
      'attack': 110,
      'speed': 30,
      'hp': 160,
      'defense': 65,
      'type': ['normal'],
      'moves': ['mega-punch', 'pay-day', 'fire-punch']
    }, {
      'id': 144,
      'name': 'articuno',
      'weight': 554,
      'attack': 85,
      'speed': 85,
      'hp': 90,
      'defense': 100,
      'type': ['flying', 'ice'],
      'moves': ['razor-wind', 'gust', 'whirlwind']
    }, {
      'id': 145,
      'name': 'zapdos',
      'weight': 526,
      'attack': 90,
      'speed': 100,
      'hp': 90,
      'defense': 85,
      'type': ['flying', 'electric'],
      'moves': ['razor-wind', 'whirlwind', 'fly']
    }, {
      'id': 146,
      'name': 'moltres',
      'weight': 600,
      'attack': 100,
      'speed': 90,
      'hp': 90,
      'defense': 90,
      'type': ['flying', 'fire'],
      'moves': ['razor-wind', 'wing-attack', 'whirlwind']
    }, {
      'id': 147,
      'name': 'dratini',
      'weight': 33,
      'attack': 64,
      'speed': 50,
      'hp': 41,
      'defense': 45,
      'type': ['dragon'],
      'moves': ['bind', 'slam', 'headbutt']
    }, {
      'id': 148,
      'name': 'dragonair',
      'weight': 165,
      'attack': 84,
      'speed': 70,
      'hp': 61,
      'defense': 65,
      'type': ['dragon'],
      'moves': ['bind', 'slam', 'headbutt']
    }, {
      'id': 149,
      'name': 'dragonite',
      'weight': 2100,
      'attack': 134,
      'speed': 80,
      'hp': 91,
      'defense': 95,
      'type': ['flying', 'dragon'],
      'moves': ['fire-punch', 'ice-punch', 'thunder-punch']
    }, {
      'id': 150,
      'name': 'mewtwo',
      'weight': 1220,
      'attack': 110,
      'speed': 130,
      'hp': 106,
      'defense': 90,
      'type': ['psychic'],
      'moves': ['mega-punch', 'pay-day', 'fire-punch']
    }, {
      'id': 151,
      'name': 'mew',
      'weight': 40,
      'attack': 100,
      'speed': 100,
      'hp': 100,
      'defense': 100,
      'type': ['psychic'],
      'moves': ['pound', 'mega-punch', 'pay-day']
    }];

    vm.isAwesome = function (name) {
      alert(name + ' is AWESOME!');
    }
  }

})();