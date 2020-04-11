const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
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
    },
    tokens:[{
        _id : false,
        token:{
            type: String,
            require: true,
        },
    }]
},{
    timestamps :true
})

studentSchema.methods.toJSON =  function (){
    const user = this
    const userObject = user.toObject()  
    delete userObject.password
    delete userObject.tokens
    return userObject
}

studentSchema.methods.genAuthToken = async function(){
    const user = this 
    const token =  jwt.sign({_id : user._id.toString()},process.env.JWT_SECRET)
    user.tokens = user.tokens.concat({token : token })
    // await user.save()
    return token
}

studentSchema.statics.findByCredential = async function (email,password){
    const user =await Student.findOne({email})
    if(!user) throw  new Error('This email is not regesterd')
    if(password !== user.password) throw new Error('Password is invaild')
    return user
}


const Student = new mongoose.model('Student',studentSchema)
module.exports = Student