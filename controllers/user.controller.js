const multer = require('multer');
const model = require('../models');
const helpers = require('../config/helper')
const multerConfig = require('../config/multer')


async function getData(req,res){

  const users = await model.User.findAll();
}

async function getsingleUser(req,res){

  const users = await model.User.findAll({where:{id:req.user.id}});
  console.log(req.user)
  res.json(users);
}


async function uploadProfilePicture(req,res){

    multerConfig.singleUpload(req, res, async function(err) {

    if (err instanceof multer.MulterError) {
        return res.json(err.message);
    } 
    else if (err) {
      return res.json(err);
    } 
    else if (!req.file) {
      return res.json({"image": req.file, "msg":'Please select an image to upload'});
    }
    if(req.file){
      console.log("usee>>>>>>>",req.user);
      await model.User.update({profilePicture:req.file.path}, {where:{id:req.user.id}});
      return  res.json({'msg': 'uploaded', 'file':req.file});
    } 

});
}

async function getUserProfilePicture(req,res){
  const picture = await  model.User.findOne({where:{id:req.user.id} ,attributes:['profilePicture']});//{attributes:['profilePicture']}
  res.json(picture);
}

async function uploadMultiPic(req,res){

    if(req.file){
      return  res.json({'msg': 'uploaded',
      'file':req.file});
    } 
    

}



module.exports ={
  getData,
  getsingleUser,
  uploadProfilePicture,
  uploadMultiPic,
  getUserProfilePicture
};