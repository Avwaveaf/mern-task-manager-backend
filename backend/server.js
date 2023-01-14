const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB');
const Task = require('./model/taskManager.model');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use("/api/v1/tasks",taskRoutes)

app.get("/", ((req, res) => { 
    res.send("welcome user");
}));


 


const PORT = process.env.PORT || 5000;

const startServer = async () => { 
    try {
        await connectDB();            
        app.listen(5000, () => {
            console.log('\x1b[33m',`[DEV-SERVER]Server established on Port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
};
startServer();
