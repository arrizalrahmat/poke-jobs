'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Pokemons', 'jobId', Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Pokemons', 'jobId');
  }
};
