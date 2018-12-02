const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View Engine Setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body-Parser Middleware
app.use(bodyParser.json());

// Static Folder
app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(3456, () => console.log("Server started..."));