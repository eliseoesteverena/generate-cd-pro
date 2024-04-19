const express = require('express');
const app = express();
const exphdb = require('express-handlebars');
const path = require("path");

// Middleware
app.use(express.static('static'));

// Routers

const routerNewCD = require('./routers/new.js')

const routerCD = require('./routers/cd.js')

const routerCDFiles = require('./routers/cds_files.js')

app.get('/new', routerNewCD);
app.post('/new', routerNewCD);
app.get('/cd/:file',routerCD);

app.get('/generate-cds/:file', routerCDFiles)

// Server
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('El servidor está escuchando en el puerto ' + port + "...");
});

