const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

// Multer
app.use('/files', express.static(path.resolve(__dirname, 'uploads')));

// Dotenv
require('dotenv').config();

// Sessions
app.use(session({
    secret: process.env.SECRET,
    cookie: { maxAge: 600000 }
}));

// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Express.static
app.use(express.static(path.join(__dirname + '/public')));

// Rotas
app.use(routes)

// View engine(ejs)
app.set('view engine', 'ejs');

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, ()=>{
    console.log('Conectado ao MongoDB.');
});

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando: localhost:${process.env.PORT}`);
});