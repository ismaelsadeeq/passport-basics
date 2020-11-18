const model = require('../models');

async function getTask(req,res){
  const tasks = await model.Task.findAll({attributes:['content']});
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
  const task = await model.Task.update({content:req.body},{where:{id:taskId,userId:userId}})
  res.json('task updated');
}

async function createTask(req,res){
  userId = req.params.id
  const data = req.body;
  const task = await model.Task.create({content:data.content,userId:userId})
  res.json('Task created')
};

module.exports ={
  getTask,
  getUserTask,
  updateTask,
  createTask
};