const Game = require('./models/game')

const data = [
  {
    name: 'Red',
    generation: 1
  },
  {
    name: 'Blue',
    generation: 1
  },
  {
    name: 'Yellow',
    generation: 1
  },
  {
    name: 'Gold',
    generation: 2
  },
  {
    name: 'Silver',
    generation: 2
  },
  {
    name: 'Crystal',
    generation: 2
  },
  {
    name: 'Ruby',
    generation: 3
  },
  {
    name: 'Sapphire',
    generation: 3
  },
  {
    name: 'Emerald',
    generation: 3
  },
  {
    name: 'FireRed',
    generation: 3
  },
  {
    name: 'LeafGreen',
    generation: 3
  },
  {
    name: 'Diamond',
    generation: 4
  },
  {
    name: 'Pearl',
    generation: 4
  },
  {
    name: 'Platinum',
    generation: 4
  },
  {
    name: 'HeartGold',
    generation: 4
  },
  {
    name: 'SoulSilver',
    generation: 4
  },
  {
    name: 'Black',
    generation: 5
  },
  {
    name: 'White',
    generation: 5
  },
  {
    name: 'Black 2',
    generation: 5
  },
  {
    name: 'White 2',
    generation: 5
  },
  {
    name: 'X',
    generation: 6
  },
  {
    name: 'Y',
    generation: 6
  },
  {
    name: 'Omega Ruby',
    generation: 6
  },
  {
    name: 'Omega Sapphire',
    generation: 6
  },
  {
    name: 'Sun',
    generation: 7
  },
  {
    name: 'Moon',
    generation: 7
  },
  {
    name: 'Ultra Sun',
    generation: 7
  },
  {
    name: 'Ultra Moon',
    generation: 7
  },
  {
    name: 'Sword',
    generation: 8
  },
  {
    name: 'Shield',
    generation: 8
  }
];

const seed = () => {
  Game.bulkCreate(data)
}

module.exports = seed