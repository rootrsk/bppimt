const express = require('express')
const app = express()
const router = express.Router()
const Dept = require('../models/semester')

app.use(router)

router.post('/dept',async(req,res)=>{
    const dept = new Dept(req.body)
    await dept.save()
    res.send(dept)
})








module.exports = router