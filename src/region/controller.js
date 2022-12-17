const Region = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let region = await Region.create(req.body)
            if(!region){
                return res.status(400).send("region yaratishda hatolik boldi")
            }
            return res.status(201).send(region)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let regions = await Region.find({})
           if(!regions){
            return res.status(400).send("regionlarni olishda hatolik boldi ")
            }
        return res.status(200).send(regions)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let regionId = req.params.id
           let region = await Region.findOne({_id : regionId})
           if(!region){
            return res.status(400).send("regionlarni olishda hatolik boldi ")
            }
        return res.status(200).send(region)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let regionId = req.params.id
        let region = await Region.findByIdAndDelete(regionId)           
        return res.status(200).send(region)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let regionId = req.params.id
        await Region.findByIdAndUpdate(regionId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}