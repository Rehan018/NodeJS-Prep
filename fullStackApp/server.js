const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON in request bodies

// View engine setup
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');  // Assuming you renamed this file
const errorRoutes = require('./routes/errorRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/booking', bookingRoutes);
app.use(errorRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
