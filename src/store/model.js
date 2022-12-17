const mongoose = require("mongoose")

const storeSchema = mongoose.Schema({
    region : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "region",
        required : true
    },
    director : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "user",
        required :true
    },
    products : [
        {
            title: String,
            quantity: String
        }
    ]
}, { timestamps: true, versionKey: false })

const Store = mongoose.model("store" , storeSchema)
module.exports = Store