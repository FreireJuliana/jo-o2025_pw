const express = require("express")
const userController = require("./controllers/userController")

const app = express()

app.get("/", (request, response) => {
    response.send("CORINTHIANS")
})

//app.use(express.json())



app.post("/users",(req, res) => {

console.log(req)
    res.send("estamos testando ")
})


app.get("/users",userController.getAllUsers )

module.exports = app 