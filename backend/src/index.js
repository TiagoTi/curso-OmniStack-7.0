require('dotenv').config()

const path = require('path')

const process = require('process')

const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

const app = express()

const server = require('http').Server(app)

app.use(cors())

mongoose.connect(
    `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}`,
    {useNewUrlParser: true}
);


app.use(
    '/files',
    express.static(
        path.resolve(
            __dirname, '..','uploads', 'resized'
        )
    )
)


app.use(require('./routes'))


server.listen(process.env.APP_SERVER_PORT)