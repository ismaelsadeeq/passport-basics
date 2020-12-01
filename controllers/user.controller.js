const multer = require('multer');
const model = require('../models');
const helpers = require('../config/helper')
const multerConfig = require('../config/multer')


async function getData(req,res){

  const users = await model.User.findAll();
}

async function getsingleUser(req,res){

  const users = await model.User.findAll({where:{id:req.user.id}});
  res.json(users)
}


async function uploadProfilePicture(req,res){

    multerConfig.singleUpload(req, res, function(err) {

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
      return  res.json({'msg': 'uploaded',
      'file':req.file});
    } 

});
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
  uploadMultiPic
};