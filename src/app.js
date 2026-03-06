const express = require("express")

const app = express()

app.get("/", (request, response) => {
    response.send("CORINTHIANS")
})

app.get("/user", (req,res) => {
    res.send([
        {
            "id" :1,
            "name" :"Paulo",
            "idade" : 27
        }
    ])

})

module.exports = app 