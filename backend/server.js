import express from 'express'


const PORT = 3000;
const app = express()

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

app.get("/tasks", (req, res) => {
    res.send("All tasks will show up from this api endpoint")
})

app.post("/tasks", (req, res) => {
    //do something
})

app.patch("/tasks/:id", (req, res) => {
    // do something with req.params.id
})

app.delete("/tasks/:id", (req, res) => {
    // remove the id with task id "req.params.id" from the task list
})


//main quests - top 3 priority items
app.get("/main-quests", (req, res) => {
    res.send("All high priority tasks will show up here")
})

app.patch("/main-quests/:id", (req, res) => {
    // edit the priority of the task with id "req.params/id"
})


// settings and theme
app.get("/settings", (req, res) => {
    res.send("Get user settings here from this endpoint")
})

app.patch("/settings", (req, res) => {
    // update settings as needed here
})

// Whimsify™
app.post("/whimisfy", (req, res) => {
    // send request to api to whimsify™ task
})

app.get("/whimsify/:id", (req, res) => {
    // fetch previous whimsified versions 
})