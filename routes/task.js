var express = require('express');
var router = express.Router();
const controller = require('../controllers/task.controller')

/* GET users listing. */
router.get('/', controller.getTask)
router.get('/:id', controller.getUserTask)
router.put('/:id/task/:taskId', controller.updateTask)
router.post('/:id', controller.createTask)
module.exports = router;
