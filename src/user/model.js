const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    lastName : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    middleName : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    role : {
        type : String,
        required: true
    },
    phone : {
        type : String,
        minlength: 3,
        maxlength: 70,
        required : true
    },
    password : {
        type: String,
        minlength: 3,
        maxlength : 50,
        required: true
    },
    region : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "region",
        required :true
    }
}, { timestamps: true, versionKey: false })

const User = mongoose.model("user" , userSchema)
module.exports = User