// const http = require('http');
const express=require('express');

const bodyParser=require('body-parser');
const app=express();
// use allow to except middile where function
const shopRouters=require('./routes/shop.js');
const adminRoutes=require('./routes/admin.js');
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRouters);



app.use((req,res,next)=>{
    res.status(404).send('Yeh Me Kahan Aagya Bhai');
})
// app.use((req,res,next)=>{
//     console.log("middleware");
//     next();
// });


// app.use('/',(req,res,next)=>{
//     console.log('This always run!');
//     next();
// });

// app.use('/add-product',(req,res,next)=>{
//     console.log("second middleware");
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
// });

// app.post('/product',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/');
// });

app.use('/',(req,res,next)=>{
    res.send('<h1>Hi My Name Is Rehan!</h1>')
});
// const server = http.createServer(app);

app.listen(3001);













// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/add-product', (req, res, next) => {
//     console.log("Displaying add-product form");
//     res.send('<form action="/product" method="POST">' +
//         '<input type="text" name="title" placeholder="Product Title"><br>' +
//         '<input type="text" name="size" placeholder="Product Size"><br>' +
//         '<button type="submit">Add Product</button>' +
//         '</form>');
// });

// app.post('/product', (req, res, next) => {
//     const productTitle = req.body.title;
//     const productSize = req.body.size;

//     console.log('Product Title:', productTitle);
//     console.log('Product Size:', productSize);

//     // You can do further processing or store the data in a database here

//     res.redirect('/');
// });

// app.get('/', (req, res, next) => {
//     console.log("Displaying home page");
//     res.send('<h1>Hi, My Name Is Rehan!</h1>');
// });

// app.listen(3001, () => {
//     console.log('Server is running on port 3001');
// });
