const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    return res.send(`Hello World: ${req.query.name}`)
})

app.listen(3333)