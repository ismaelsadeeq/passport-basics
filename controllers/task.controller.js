const model = require('../models');

async function getTask(res){

  const tasks = await model.Task.findAll({attributes:['item']});
  res.json(tasks);
}

async function getUserTask(req,res){
  userId = req.params.id;
  const tasks =  await model.Task.findOne({where:{userId:userId},include:[model.User]})
  res.json(task)
}

async function updateTask(req,res){
  userId = req.params.id;
  taskId = req.params.taskId;
  const task = await model.Task.update({item:req.body},{where:{id:taskId,userId:userId}})
  res.json('task updated');
}

async function createTask(req,res){

  const task = await model.Task.create(req.body)
  res.json('Task created')
};

module.exports ={
  getTask,
  getUserTask,
  updateTask,
  createTask
};