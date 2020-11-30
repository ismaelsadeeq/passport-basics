const imageFilter = (req,file,cb) =>{
  
  if (!file.originalname.match(/\.(.jpg|JPG|JPEG|jpeg|png|PNG|gif|GIF)$/)){
    req.fileValidationError = 'only image are allowed!';
    return cb(new Error('only image are allowes'),false);
  }
  cb(null,true)
}
exports.imageFilter = imageFilter; 