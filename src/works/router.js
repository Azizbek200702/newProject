const express = require('express')
const router = express.Router()
const workController = require("./controller")
const authController = require('../util/authenticate')

router.use(authController)

router.route('/').post(workController.addNew)

router.route('/').get(workController.getAll)

router.route('/:id').get(workController.getOne)

router.route('/:id').delete(workController.delete)

router.route('/:id').put(workController.update)

module.exports = router