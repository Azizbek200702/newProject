const express = require('express');
const router = express.Router();
const objectsRouter = require("./src/objects/router")
const regionRouter = require("./src/region/router")
const workRouter = require("./src/works/router")
const materialsRouter = require("./src/materials/router")
const usersRouter = require("./src/user/router")
const districtRouter = require("./src/district/router")
const productRouter = require("./src/products/router")
const storeRouter = require("./src/store/router")
const orderRouter = require("./src/orders/router")
const authRouter = require('./src/auth/router')

router.use('/user', usersRouter);
router.use('/login', authRouter);
router.use('/object', objectsRouter);
router.use('/region', regionRouter);
router.use('/works', workRouter);
router.use('/materials', materialsRouter);
router.use('/district', districtRouter);
router.use('/product', productRouter);
router.use('/store', storeRouter);
router.use('/order', orderRouter);


module.exports = router;