const multer = require('multer');
const storage = require('../config/multer');
const model = require('../models');
const helpers = require('../config/helper')

async function getData(req,res){

  const users = await model.User.findAll();
}

async function getsingleUser(req,res){

  const users = await model.User.findAll({where:{id:req.user.id}});
  res.json(users)
}

async function uploadProfilePicture(req,res){

 const upload = multer({
   storage:storage,
   fileFilter:helpers.imageFilter

 }).single("profile_picture");

 upload(req,res, (err)=>{
  if (req.file) {
    return res.json("fileuploaded");
  } 
  if (err){
    return res.json(err)
  }
  
 }) 

}

module.exports ={
  getData,
  getsingleUser,
  uploadProfilePicture
};