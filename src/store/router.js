const express = require('express')
const router = express.Router()
const storeController = require("./controller")
const authController = require('../util/authenticate')

router.use(authController)

router.route('/').post(storeController.addNew)

router.route('/').get(storeController.getAll)

router.route('/:id').get(storeController.getOne)

router.route('/:id').delete(storeController.delete)

router.route('/:id').put(storeController.update)

module.exports = router