//Module
const express = require('express')
const hbs = require('hbs')
const path = require('path')
const request = require('request')
const studentRouter = require('./src/database/routers/student')
const deptRouter = require('./src/database/routers/dept')
const bodyParser = require('body-parser')
const app = express()
//Database
require('./src/database/mongoose')
const publicDirPath = path.join(__dirname,'/template/public')
const srcDirPath = path.join(__dirname,'/src')
const partialsDirPath = path.join(__dirname,'/template/partials')
//parsing data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));

const router = new express.Router()
app.use(router)
app.use(studentRouter)
app.use(deptRouter)
const port = process.env.PORT 
app.use(express.json())
app.use(express.static(srcDirPath))
console.log("public views :",publicDirPath)

app.set('view engine','hbs')
app.set('views' ,publicDirPath)
hbs.registerPartials(partialsDirPath)
router.get('',(req,res)=>{
    res.render('index')
})

//Requseting  pages from home folder 
router.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})
router.get('/help',(req,res)=>{
    res.render('help')
})
// router.get('/about',(req,res)=>{
//     res.render('about')
// })
router.get('/signup',(req,res)=>{
    res.render('signup')
})

//Starting server at locoal port 3000
app.listen(port,()=>{
    console.log("Server started at port : "+ port)
})