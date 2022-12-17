const express = require('express')
const router = express.Router()
const districtController = require("./controller")


router.route('/').post(districtController.addNew)

router.route('/').get(districtController.getAll)

router.route('/:id').get(districtController.getOne)

router.route('/:id').delete(districtController.delete)

router.route('/:id').put(districtController.update)

module.exports = router