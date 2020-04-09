const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        lowercase :true,
        trim : true
    },
    college_roll:{
        type : Number,
        trim : true,
        required : true
        // unique : true
    },
    university_roll:{
        type : Number,
        // unique : true,
        trim : true,
        required : true
    },
    city :{
        type: String,
        trim : true,
    },
    year : {
        type : Number,
        trim : true,
        required : true
    },
    section :{
        type : String,
        trim : true,
        lowercase : true,
        required : true
    },
    department :{
        type : String,
        trim : true,
        lowercase : true,
        required : true
    },
    contact_no :{
        type : Number,
        trim : true
    },
    password : {
        type: String,
        trim : true,
        required: true
    }
},{
    timestamps :true
})

const Student = new mongoose.model('Student',studentSchema)

module.exports = Student