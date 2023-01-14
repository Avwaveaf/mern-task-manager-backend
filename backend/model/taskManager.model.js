const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required:[true,"Please add Task Title"]
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default:false
    }
},{timestamps:true});

const Task = mongoose.model("Task",taskSchema)

module.exports = Task;