const express = require('express')
const router = express.Router()
const productController = require("./controller")


router.route('/').post(productController.addNew)

router.route('/').get(productController.getAll)

router.route('/:id').get(productController.getOne)

router.route('/:id').delete(productController.delete)

router.route('/:id').put(productController.update)

module.exports = router