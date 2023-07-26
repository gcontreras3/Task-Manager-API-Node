const express = require('express')
const router = express.Router();

// importing all controllers (routes)
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router