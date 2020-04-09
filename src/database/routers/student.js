const express = require('express')
const sendMail = require('../../emails/welcome')
const app = express()
const User = require('../models/student')
const router = new express.Router()
router.post('/student/signup',async(req,res)=>{
    console.log(req.body)

    try{
        const user = new User(req.body) 
        sendMail.welcomeMail(user.email,user.username)
        await user.save()
        console.log(user)
        res.send(user)
    } catch (e){
        res.send( {error : e.message })
    }
})

router.patch('/student/update',(req,res)=>{

})

router.get('/student',async(req,res)=>{
    const user  = await User.find({})
    res.send(user)
    console.log(user)
})

module.exports = router