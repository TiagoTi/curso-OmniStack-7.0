const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    return res.send('ola mundo')
})

app.listen(3333)