const mongoose = require('mongoose')

const semSchema = new mongoose.Schema({
    semester : {
        type : Number,
        required : true
    },
    department : {
        type : String,
        required : true,
        trim : true,
        lowercase : true
    },
    subjects : [{
        subject : {
            type : String,
            trim : true,
            lowercase : true
        }

    }]
})

const Semester = new mongoose.model('Semester',semSchema)

module.exports = Semester