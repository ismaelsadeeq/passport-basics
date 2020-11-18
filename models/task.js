'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
   
  };
  Task.associate = function (models){
    Task.belongsTo(models.User,{
      foreignKey: 'userId',
    });
  };
  Task.init({
    content: DataTypes.STRING,
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  },
  
   {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};