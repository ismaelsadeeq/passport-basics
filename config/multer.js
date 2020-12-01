const multer  = require('multer');
const helpers = require('./helper');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+'_'+file.originalname)
    }
});


const singleUpload = multer({
    storage: storage, 
    limits: {fileSize: 1024 * 1024 },
    fileFilter: helpers.imageFilter
}).single('profile_pic');

const multipleUpload = multer({
    storage: storage, 
    limits: {fileSize: 1024  },
    fileFilter: helpers.imageFilter
}).array('profile_pic', 5);

module.exports = {
    singleUpload,
    multipleUpload
}