const model = require('../models');

async function getTask(req,res){
  const tasks = await model.Task.findAll({include:[model.User],attributes:['content']});
  res.json(tasks);
}

async function getUserTask(req,res){
  userId = req.params.id;
  const tasks =  await model.Task.findOne({where:{userId:userId},include:[model.User,attributes['firstName','lastName']]})
  res.json(tasks)
}

async function updateTask(req,res){
  userId = req.params.id;
  taskId = req.params.taskId;
  const data = req.body;
  const task = await model.Task.update({content:data.content,userId:userId},{where:{id:taskId,userId:userId}})
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