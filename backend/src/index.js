require('dotenv').config()

const process = require('process')

const express = require('express')

const mongoose = require('mongoose')

const app = express()

mongoose.connect(
    `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}`,
    {useNewUrlParser: true}
);

app.get('/', (req,res)=>{
    return res.send(`Hello World: ${req.query.name}`)
})

app.listen(3333)