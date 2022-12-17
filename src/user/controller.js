const User = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let users = await User.create(req.body)
            if(!users){
                return res.status(400).send("users yaratishda hatolik boldi")
            }
            return res.status(201).send(users)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let userss = await User.find({})
           if(!userss){
            return res.status(400).send("userslarni olishda hatolik boldi ")
            }
        return res.status(200).send(userss)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let usersId = req.params.id
           let users = await User.findOne({_id : usersId})
           if(!users){
            return res.status(400).send("userslarni olishda hatolik boldi ")
            }
        return res.status(200).send(users)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let usersId = req.params.id
        let users = await User.findByIdAndDelete(usersId)           
        return res.status(200).send(users)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let usersId = req.params.id
        await User.findByIdAndUpdate(usersId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}