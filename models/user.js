'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
   
  };
  User.associate = function(models){
    User.hasMany(models.Task,{
      foreignKey:'userId'
    });
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    profilePicture :DataTypes.STRING,
    googleId:DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};