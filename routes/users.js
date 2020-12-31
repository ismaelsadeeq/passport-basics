var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller')
const passport = require('passport')
const oauthController = require('../controllers/googleOauth.Controller')

/* GET users listing. */
router.get('/', controller.getData)
router.get('/profile',oauthController.authCheck, passport.authenticate("jwt",{session:false}), controller.getsingleUser );
router.post('/uploadProfilePicture',passport.authenticate("jwt",{session:false}), controller.uploadProfilePicture)
router.get('/profilePicture', passport.authenticate("jwt",{session:false}), controller.getUserProfilePicture) 

module.exports = router;
