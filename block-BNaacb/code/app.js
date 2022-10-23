const express = require('express');
const logger = require('morgan')

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/sample", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("mongodb connected")
    }
})

const app = express();


app.use(logger)



app.listen(3000, () => {
    console.log("Server running on port 3000")
})