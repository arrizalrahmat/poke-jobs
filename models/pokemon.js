'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    level: DataTypes.INTEGER,
    income: DataTypes.INTEGER,
    ball: DataTypes.STRING,
    jobId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate(instance, options) {
        switch(instance.ball) {
          case 'Great Ball': instance.level = 10; break
          case 'Ultra Ball': instance.level = 25; break
          case 'Master Ball': instance.level = 50; break
          default: instance.level = 5; break
        }
        instance.income = 0
      }
    }
  });
  Pokemon.associate = function(models) {
    // associations can be defined here
    Pokemon.belongsTo(models.Job, { foreignKey: 'jobId' })
  };
  return Pokemon;
};