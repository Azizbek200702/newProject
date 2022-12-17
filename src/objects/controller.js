const Object = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let object = await Object.create(req.body)
            if(!object){
                return res.status(400).send("object yaratishda hatolik boldi")
            }
            return res.status(201).send(object)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let objects = await Object.find({})
           if(!objects){
            return res.status(400).send("objectlarni olishda hatolik boldi ")
            }
        return res.status(200).send(objects)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let objectId = req.params.id
           let object = await Object.findOne({_id : objectId})
           if(!object){
            return res.status(400).send("objectlarni olishda hatolik boldi ")
            }
        return res.status(200).send(object)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let objectId = req.params.id
        let object = await Object.findByIdAndDelete(objectId)           
        return res.status(200).send(object)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let objectId = req.params.id
        await Object.findByIdAndUpdate(objectId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}