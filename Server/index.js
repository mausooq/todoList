const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todoModel = require('./models/Todos')

const app = express();
app.use(cors())
app.use(express.json());
mongoose.connect('mongodb+srv://abdulmausooq:8080@fuegocluster.c8hjaqp.mongodb.net/todos')

app.post('/addTask',(req,res) =>{
    const task = req.body.task;
    console.log(task);
    todoModel.create({
        task:task
    }).then(result=> res.json(result))
    .catch(err => res.json(err))
})

app.listen(8080,() => {
    console.log("server running at 8080");
})