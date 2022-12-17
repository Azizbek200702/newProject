const mongoose = require("mongoose")

const costSchema = mongoose.Schema({
    region : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "region",
        required: true
    },
    director : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    sender : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    title : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    quantity : {
        type : Number,
        required :true
    }
}, { timestamps: true, versionKey: false })

const Cost = mongoose.model("cost" , costSchema)
module.exports = Cost