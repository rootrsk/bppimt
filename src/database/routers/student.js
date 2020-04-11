const express = require('express')
const jwt = require('jsonwebtoken')
const sendMail = require('../../emails/welcome')
const auth = require('../../middleware/auth')
const app = express()
const User = require('../models/student')
const cookieParser = require('cookie-parser')

app.use(cookieParser())
const router = new express.Router()
router.post('/student/signup',async(req,res)=>{
    try{
        const user = new User(req.body) 
        await user.save()
        sendMail.welcomeMail(user.email,user.username)
        const token = await user.genAuthToken()
        res.cookie('token',token,{maxAge:900000,httpOnly:true})
        res.redirect('/student/me')  
    } catch (e){
        res.send( {error : e.message })
    }
})

router.patch('/student/update',async(req,res)=>{

})

router.get('/student',async(req,res)=>{
    const user  = await User.find({})
    res.send(user)  
})

router.get('/student/me',auth,(req,res)=>{
    res.send(req.user)
})

router.get('/student/logout',auth,(req,res)=>{
    res.clearCookie('token')
    res.redirect('/login')
})
router.post('/student/login',async(req,res)=>{

    try{
        const user = await User.findByCredential(req.body.email,req.body.password)
        const token = await user.genAuthToken()
        res.cookie('token',token,{maxAge:900000,httpOnly:true})
        res.redirect('/student/me')    
    } catch(e) {    
        res.send({error : e.message})
   
    }

})

router.get('/students/delete')

module.exports = router