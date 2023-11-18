const path = require('path');
const products=require('../controllers/product')
module.exports={products};
const express = require('express');

const productController=require('../controllers/product');
// const rootDir = require('../util/path');

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

// exports.routes = router;
module.exports=router;

