const express = require('express')

const multer = require('multer')

const routes = express.Router()

const PostController = require('./controlles/PostController')

const uploadConfig = require('./config/upload')

const upload = multer(uploadConfig)


routes.get('/', (req,res)=>{
    return res.send(`Hello World: ${req.query.name}`)
})


routes.post('/posts', upload.single('image'), (req,res)=>{
    PostController.store(req, res)
})


module.exports = routes