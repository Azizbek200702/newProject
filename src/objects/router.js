const express = require('express')
const router = express.Router()
const objectController = require("./controller")
const authController = require('../util/authenticate')

router.use(authController)

router.route('/').post(objectController.addNew)

router.route('/').get(objectController.getAll)

router.route('/:id').get(objectController.getOne)

router.route('/:id').delete(objectController.delete)

router.route('/:id').put(objectController.update)

module.exports = router