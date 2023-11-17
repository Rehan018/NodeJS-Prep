const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Middleware to check if the user is logged in
const checkLoggedIn = (req, res, next) => {
    const username = req.cookies.username;
    if (username) {
        req.username = username;
        next();
    } else {
        res.redirect('/login');
    }
};

// Check if the file exists, if not, create it
const messagesFilePath = 'messages.txt';
if (!fs.existsSync(messagesFilePath)) {
    fs.writeFileSync(messagesFilePath, ''); // create an empty file
}

// Routes
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', (req, res) => {
    const { username } = req.body;
    res.cookie('username', username);
    // res.redirect('/');
    // Store username in local storage
    res.send(`
        <script>
            localStorage.setItem('username', '${username}');
            window.location.href = '/';
        </script>
    `);

});

app.get('/', checkLoggedIn, (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/sendMessage', checkLoggedIn, (req, res) => {
    const { message } = req.body;
    const username = req.username;

    // Store the message in a file
    fs.appendFile('messages.txt', `${username}: ${message}\n`, (err) => {
        if (err) throw err;
        console.log('Message saved!');
        res.redirect('/');
    });
});

app.get('/getMessages', checkLoggedIn, (req, res) => {
    // Read messages from the file
    fs.readFile('messages.txt', 'utf8', (err, data) => {
        if (err) throw err;
        const messages = data.split('\n').filter(msg => msg.trim() !== '');
        res.json(messages);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
