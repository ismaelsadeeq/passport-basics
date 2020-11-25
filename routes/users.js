var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller')
const passport = require('passport')

/* GET users listing. */
router.get('/', controller.getData)
router.get('/:id', passport.authenticate("jwt",{session:false}), controller.getsingleUser )
router.post('/', controller.createUser)
module.exports = router;
