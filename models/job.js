'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    income: DataTypes.INTEGER,
    productive: DataTypes.INTEGER
  }, {});
  Job.associate = function(models) {
    // associations can be defined here
    Job.hasMany(models.Pokemon, { foreignKey: 'jobId' })
  };
  return Job;
};