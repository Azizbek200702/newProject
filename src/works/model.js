const mongoose = require("mongoose")

const workSchema = mongoose.Schema({
    region : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "region",
        required : true
    },
    district : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "district",
        required :true
    },
    images : {
        type : [Object],
        ref: "user",
        required :true
    },
    title: {
        type: String,
        required: true
    },
    director : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "user",
        required :true
    },
    nazoratchi : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "user",
        required :true
    }
}, { timestamps: true, versionKey: false })

const Work = mongoose.model("work" , workSchema)
module.exports = Work