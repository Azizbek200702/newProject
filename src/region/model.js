const mongoose = require("mongoose")

const regionSchema = mongoose.Schema({
    title: {
        type: String,
        minlength: 3,
        maxlength: 70,
        required: true
    }
}, { timestamps: true, versionKey: false })

const Region = mongoose.model("region" , regionSchema)
module.exports = Region