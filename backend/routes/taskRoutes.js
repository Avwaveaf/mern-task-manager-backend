const express = require('express');
const { createTask, getAllTask, getTask, deleteTask, updateTask } = require('../controllers/taskControllers');
const Task = require('../model/taskManager.model');
const router = express.Router();

//create a new task
router.post("/", createTask);

// get all task
router.get("/", getAllTask);

//get single task
router.get("/:id", getTask);

//delete single task
router.delete("/:id", deleteTask);

//update whole data with put
router.put("/:id", updateTask);

module.exports = router;