const model = require('../models');

async function getData(req,res){

  const users = await model.User.findAll();
}

async function createUser(req,res){

  const user = await model.User.create(req.body)
  res.json('user created')
};

module.exports ={
  getData,
  createUser
};