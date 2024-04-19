
const express = require('express');
const path = require("path");
var fs = require("fs");
const app = express();
const routerCD = express.Router();

const exphdb = require('express-handlebars');
const handlebarsInstance = exphdb.create({});
app.engine('handlebars', handlebarsInstance.engine);

routerCD.use;

routerCD.get('/cd/:file', (req, res) => {
  var file = req.params.file
  app.set('view-engine', '.hbs');
  res.render('../static/views/main.hbs', 
    { 
      content: file 
    }
  );
})

module.exports = routerCD;