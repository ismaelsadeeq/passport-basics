var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller')
const passport = require('passport')

/* GET users listing. */
router.get('/', controller.getData)
router.get('/profile', passport.authenticate("jwt",{session:false}), controller.getsingleUser );
router.post('/uploadProfilePicture',passport.authenticate("jwt",{session:false}), controller.uploadProfilePicture)
router.get('/form', (req,res)=> {
  res.render('form')
})
module.exports = router;
