const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title : {
        type : String,
        minlength: 3,
        maxlength : 100,
        required :true
    },
    parent : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "user",
        default: null
    }
}, { timestamps: true, versionKey: false })

const Product = mongoose.model("product" , productSchema)
module.exports = Product