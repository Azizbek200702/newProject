const Cost = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let cost = await Cost.create(req.body)
            if(!cost){
                return res.status(400).send("cost yaratishda hatolik boldi")
            }
            return res.status(201).send(cost)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let costs = await Cost.find({})
           if(!costs){
            return res.status(400).send("costlarni olishda hatolik boldi ")
            }
        return res.status(200).send(costs)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let costId = req.params.id
           let cost = await Cost.findOne({_id : costId})
           if(!cost){
            return res.status(400).send("costlarni olishda hatolik boldi ")
            }
        return res.status(200).send(cost)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let costId = req.params.id
        let cost = await Cost.findByIdAndDelete(costId)           
        return res.status(200).send(cost)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let costId = req.params.id
        await Cost.findByIdAndUpdate(costId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}