const express = require('express')
const router = express.Router()
const regionController = require("./controller")


router.route('/').post(regionController.addNew)

router.route('/').get(regionController.getAll)

router.route('/:id').get(regionController.getOne)

router.route('/:id').delete(regionController.delete)

router.route('/:id').put(regionController.update)

module.exports = router