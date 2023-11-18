const path = require('path');
const products=require('../controllers/product')
module.exports={products};
const express = require('express');

const contactusController=require('./controllers/contactust');
// const rootDir = require('../util/path');
const successController=require('./controllers/success');

const router = express.Router();



// /admin/add-product => GET
app.get('/contactus', contactusController.getContactUs);
app.post('/contactus', contactusController.postContactUs);

app.get('/success',successController.getSuccess);

// exports.routes = router;
module.exports=router;

