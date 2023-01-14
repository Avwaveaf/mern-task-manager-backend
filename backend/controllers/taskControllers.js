const Task = require("../model/taskManager.model");

const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
};

const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
 
const getTask = async (req, res) => { 
    try {
        const { id } = req.params;
        const foundedTask = await Task.findById(id);
        if (!foundedTask) { 
            return res.status(404).json(`No Task Found with id of '${id}'`)
        }
        res.status(200).json(foundedTask);


    } catch (error) {
        res.status(500).json({msg:error.message})
    }
};

//delete Task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const foundedTask = await Task.findByIdAndDelete(id);
        if (!foundedTask) { 
            return res.status(404).json(`No Task Found with id of '${id}'`)
        }
        res.status(200).json("Task Successfuly deleted");
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

//update task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const foundedTask = await Task.findByIdAndUpdate(
            { _id: id }, req.body, {new:true, runValidators:true} 
        )
        if (!foundedTask) { 
            return res.status(404).json(`No Task Found with id of '${id}'`)
        }
        res.status(200).json(foundedTask)
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
module.exports = {
    createTask,
    getAllTask,
    getTask,
    deleteTask,
    updateTask
};