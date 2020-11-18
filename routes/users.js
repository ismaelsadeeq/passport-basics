var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', controller.getData)
router.get('/:id', controller.getsingleUser )
router.post('/', controller.createUser)
module.exports = router;
