const express = require('express')
const router = express.Router()
const materialController = require("./controller")


router.route('/').post(materialController.addNew)

router.route('/').get(materialController.getAll)

router.route('/:id').get(materialController.getOne)

router.route('/:id').delete(materialController.delete)

router.route('/:id').put(materialController.update)

module.exports = router