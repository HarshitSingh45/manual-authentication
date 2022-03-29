const express = require('express');
const path = require('path');
const port =8000;

const app = express();
const db = require('./config/mongoose');
app.use(express.static('./assets'));
const expressLayout = require('express-ejs-layouts');
app.use(expressLayout);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use('/', require('./routes/index'));

app.listen(port, err => {
    if(err){ console.log('error in running the server'); return;}
    console.log(`Server is up and running on port: ${port}`);
})