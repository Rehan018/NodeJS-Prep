const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');



const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const error404Controller = require('./controllers/error');
const contactusController=require('./controllers/contactust');
const successController=require('./controllers/success');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);



app.get('/success',successController.getSuccess);


app.use(error404Controller.get404);

app.listen(3000);
