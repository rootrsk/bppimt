//Module
const express = require('express')
const hbs = require('hbs')
const path = require('path')


const app = express()
const port = process.env.PORT || 3000

app.get('',(req,res)=>{
    res.send('hello there')
})
app.listen(port,()=>{
    console.log('Server started at the port ',port)
})
