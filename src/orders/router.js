const express = require('express')
const router = express.Router()
const costController = require("./controller")
const authController = require('../util/authenticate')

router.use(authController)

router.route('/').post(costController.addNew)

router.route('/').get(costController.getAll)

router.route('/:id').get(costController.getOne)

router.route('/:id').delete(costController.delete)

router.route('/:id').put(costController.update)

module.exports = router