require('./db/connect')
const express = require('express')
const app = express()
const port = 3001
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware

app.use(express.json())

// routes

/*
app.get('/api/v1/tasks') - get all the tasks
app.post('/api/v1/tasks') - create a new task
app.get('/api/v1/tasks:id') - get single task
app.patch('/api/v1/tasks:id') - update task
app.delete('/api/v1/tasks:id') - delete task
*/
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})
// using middleware api/v1/tasks
app.use('/api/v1/tasks', tasks)


// get all the tasks
// GET request that get all the items


// Make a POST request that adds a new task
// POST request creates a new task

// GET request that gets info for a single task


// UPDATE to change tasks

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start();