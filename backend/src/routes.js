const express = require('express')

const routes = express.Router()

const PostController = require('./controlles/PostController')


routes.get('/', (req,res)=>{
    return res.send(`Hello World: ${req.query.name}`)
})


routes.post('/posts', (req,res)=>{
    console.log(req.params)
    console.log(req.ip)
    req.on('data', (data)=>{
        console.log(data.toString());
    })
    PostController.store(req, res)
})


module.exports = routes