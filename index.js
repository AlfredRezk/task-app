const express = require('express')
const app = express();
const path = require('path');

// Import modules 
require('dotenv').config({path:'./config/app.env'})
require('colors')
require('express-async-errors');

// Configuration
const PORT = process.env.PORT || 8080;
const MODE = process.env.MODE || 'production';
const HOST = process.env.HOST || '127.0.0.1';

// Handlebars Template configurations 
const {engine}= require('express-handlebars') 
app.engine('hbs', engine({
    extname:'.hbs',
    // layoutsDir:'./views/templates',
    // defaultLayout:path.resolve(__dirname, './views/templates/site.hbs'),
    // partialsDir:'./views/partials'
    runtimeOptions:{
        allowProtoPropertiesByDefault:true
    }
}));
app.set('view engine', 'hbs')
// app.set('views', './templates');

// Middleware 
// Parse form data
app.use(express.urlencoded({extended:false}))


// Connect to DB 
require('./config/db')();

app.use(require('./routes/task'))


// Any other routes 
app.use((req, res)=>{
    res.render('pages/error', {docTitle:'Not Found', error:"Page Not Found!"})
})


// Error Handler 
app.use((error, req, res, next)=>{
    res.render('pages/error',{docTitle:'Error', error:error.message})
})

// Run server 
const server = app.listen(PORT, console.log(`Server running on ${MODE} mode at http://${HOST}:${PORT}`.green.underline))

process.on('uncaughtException', ()=>{
    server.close(console.log(`Closing server`.red))
    process.exit(1)
})