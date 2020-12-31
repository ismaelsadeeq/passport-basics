var express = require('express');
var router = express.Router();
const passport = require('passport');


const index = require('../controllers/index.controller')
const oauthController = require('../controllers/googleOauth.Controller');

/* GET home page. */
router.post('/register',index.register)
router.post('/login', index.login);

// // Auth Authentication
router.get('/auth/logout',);
router.get('/auth/google',passport.authenticate('google',{
  scope:['profile']
}));

//callback route for google
router.get('/auth/google/redirect',passport.authenticate('google'),oauthController.redirect )

module.exports = router;
