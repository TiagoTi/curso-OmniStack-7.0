require('dotenv').config()

const process = require('process')

const express = require('express')

const mongoose = require('mongoose')

const app = express()

mongoose.connect(
    `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}`,
    {useNewUrlParser: true}
);

app.use(require('./routes'))

app.listen(3333)