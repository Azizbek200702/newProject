const Materials = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let material = await Materials.create(req.body)
            if(!material){
                return res.status(400).send("material yaratishda hatolik boldi")
            }
            return res.status(201).send(material)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let materials = await Materials.find({})
           if(!materials){
            return res.status(400).send("materiallarni olishda hatolik boldi ")
            }
        return res.status(200).send(materials)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let materialId = req.params.id
           let material = await Materials.findOne({_id : materialId})
           if(!material){
            return res.status(400).send("materiallarni olishda hatolik boldi ")
            }
        return res.status(200).send(material)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let materialId = req.params.id
        let material = await Materials.findByIdAndDelete(materialId)           
        return res.status(200).send(material)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let materialId = req.params.id
        await Materials.findByIdAndUpdate(materialId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}