const UserModel = require('../user/model')
const jwt = require('jsonwebtoken')
module.exports = {
    Login: async function(req, res) {
        try {
            const {password , phone} = req.body
            const user = await UserModel.findOne({
                phone : phone,
                password : password
            })
            if(!user) {
                return res.status(401).send("login parol xato")
            }
            const token = jwt.sign(
                {
                    _id : user._id,
                    firstName: user.firstName,
                    lastName : user.lastName,
                    middleName : user.middleName,
                    phone: user.phone,
                    role : user.role
                },
                process.env.TOKEN_KEY,
                {algorithm : "HS256", expiresIn : process.env.TOKEN_EXPIRESIN}
            )
            return res.status(200).json({token})
        } catch (error) {
            return res.status(400).send(error, "login da xatolik")
        }
    }
}