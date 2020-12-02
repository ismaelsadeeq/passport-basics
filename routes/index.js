var express = require('express');
var router = express.Router();

const index = require('../controllers/index.controller')

/* GET home page. */
router.post('/register',index.register)
router.post('/login', index.login)

module.exports = router;
