const Product = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let products = await Product.create(req.body)
            if(!products){
                return res.status(400).send("products yaratishda hatolik boldi")
            }
            return res.status(201).send(products)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let productss = await Product.find({})
           if(!productss){
            return res.status(400).send("productslarni olishda hatolik boldi ")
            }
        return res.status(200).send(productss)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let productsId = req.params.id
           let products = await Product.findOne({_id : productsId})
           if(!products){
            return res.status(400).send("productslarni olishda hatolik boldi ")
            }
        return res.status(200).send(products)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let productsId = req.params.id
        let products = await Product.findByIdAndDelete(productsId)           
        return res.status(200).send(products)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let productsId = req.params.id
        await Product.findByIdAndUpdate(productsId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}