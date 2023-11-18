const path=require('path');
// const http = require('http');
const express=require('express');

const bodyParser=require('body-parser');

const app=express();
// use allow to except middile where function
const shopRouters=require('./routes/shop.js');
const adminRoutes=require('./routes/admin.js');
const constactRoutes=require('./routes/contact.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use('/uploads',express.static(__dirname+'/public'));

app.use('/admin',adminRoutes);
app.use(shopRouters);
app.use(constactRoutes);



app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
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
// const cookieParser = require('cookie-parser');
// const fs = require('fs');

// const app = express();
// const port = 3001;

// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// // Middleware to check if the user is logged in
// const checkLoggedIn = (req, res, next) => {
//     const username = req.cookies.username;
//     if (username) {
//         req.username = username;
//         next();
//     } else {
//         res.redirect('/login');
//     }
// };

// // Check if the file exists, if not, create it
// const messagesFilePath = 'messages.txt';
// if (!fs.existsSync(messagesFilePath)) {
//     fs.writeFileSync(messagesFilePath, ''); // create an empty file
// }

// // Routes
// app.get('/login', (req, res) => {
//     res.sendFile(__dirname + '/public/login.html');
// });

// app.post('/login', (req, res) => {
//     const { username } = req.body;
//     res.cookie('username', username);
//     // res.redirect('/');
//     // Store username in local storage
//     res.send(`
//         <script>
//             localStorage.setItem('username', '${username}');
//             window.location.href = '/';
//         </script>
//     `);

// });

// app.get('/', checkLoggedIn, (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });

// app.post('/sendMessage', checkLoggedIn, (req, res) => {
//     const { message } = req.body;
//     const username = req.username;

//     // Store the message in a file
//     fs.appendFile('messages.txt', `${username}: ${message}\n`, (err) => {
//         if (err) throw err;
//         console.log('Message saved!');
//         res.redirect('/');
//     });
// });

// app.get('/getMessages', checkLoggedIn, (req, res) => {
//     // Read messages from the file
//     fs.readFile('messages.txt', 'utf8', (err, data) => {
//         if (err) throw err;
//         const messages = data.split('\n').filter(msg => msg.trim() !== '');
//         res.json(messages);
//     });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });









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
