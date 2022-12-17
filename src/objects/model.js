const mongoose = require("mongoose")

const objectSchema = mongoose.Schema({
    name : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    title : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    start : {
        type : String,
        minlength: 3,
        maxlength: 70,
        required : true
    },
    end : {
        type: String,
        minlength: 3,
        maxlength : 50,
        required: true
    },
    works : {
        type : [mongoose.Schema.Types.ObjectId],
        ref: "work",
        default: []
    },
    location : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "user",
        required :true
    },
    region : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "region",
        required :true
    },
    district : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "district",
        required :true
    },
    materials : {
        type : [mongoose.Schema.Types.ObjectId],
        ref: "materials",
        default: []
    }
}, { timestamps: true, versionKey: false })

const Object = mongoose.model("object" , objectSchema)
module.exports = Object