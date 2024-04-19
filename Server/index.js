const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());
mongoose.connect('mongodb+srv://abdulmausooq:8080@fuegocluster.c8hjaqp.mongodb.net/todos')

app.post('addTas',(req,res) =>{
    const task = req.body.task;

})

app.listen(8080,() => {
    console.log("server running at 8080");
})