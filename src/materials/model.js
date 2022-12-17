const mongoose = require("mongoose")

const materialsSchema = mongoose.Schema({
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
    director : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    nazoratchi : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    title : {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    quantity : {
        type : Number,
        required : true
    },
}, { timestamps: true, versionKey: false })

const Materials = mongoose.model("materials" , materialsSchema)
module.exports = Materials