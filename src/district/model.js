const mongoose = require("mongoose")

const districtSchema = mongoose.Schema({
    title : {
        type : String,
        minlength: 3,
        maxlength : 100,
        required :true
    },
    region : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "region",
        default: null
    }
}, { timestamps: true, versionKey: false })

const District = mongoose.model("district" , districtSchema)
module.exports = District