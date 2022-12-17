const District = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let district = await District.create(req.body)
            if(!district){
                return res.status(400).send("district yaratishda hatolik boldi")
            }
            return res.status(201).send(district)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let districts = await District.find({})
           if(!districts){
            return res.status(400).send("districtlarni olishda hatolik boldi ")
            }
        return res.status(200).send(districts)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let districtId = req.params.id
           let district = await District.findOne({_id : districtId})
           if(!district){
            return res.status(400).send("districtlarni olishda hatolik boldi ")
            }
        return res.status(200).send(district)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let districtId = req.params.id
        let district = await District.findByIdAndDelete(districtId)           
        return res.status(200).send(district)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let districtId = req.params.id
        await District.findByIdAndUpdate(districtId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}