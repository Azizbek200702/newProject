const Work = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let works = await Work.create(req.body)
            if(!works){
                return res.status(400).send("works yaratishda hatolik boldi")
            }
            return res.status(201).send(works)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let workss = await Work.find({})
           if(!workss){
            return res.status(400).send("workslarni olishda hatolik boldi ")
            }
        return res.status(200).send(workss)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let worksId = req.params.id
           let works = await Work.findOne({_id : worksId})
           if(!works){
            return res.status(400).send("workslarni olishda hatolik boldi ")
            }
        return res.status(200).send(works)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let worksId = req.params.id
        let works = await works.findByIdAndDelete(worksId)           
        return res.status(200).send(works)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let worksId = req.params.id
        await Work.findByIdAndUpdate(worksId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}