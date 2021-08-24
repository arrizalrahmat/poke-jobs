'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      {
        name: 'Firefighter',
        type: 'Water',
        rate: 150,
        income: 0,
        productive: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cook',
        type: 'Fire',
        rate: 140,
        income: 0,
        productive: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gardener',
        type: 'Grass',
        rate: 100,
        income: 0,
        productive: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Electrician',
        type: 'Electric',
        rate: 170,
        income: 0,
        productive: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Magician',
        type: 'Psychic',
        rate: 200,
        income: 0,
        productive: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    return queryInterface.bulkInsert('Jobs', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jobs', null, {});
  }
};
