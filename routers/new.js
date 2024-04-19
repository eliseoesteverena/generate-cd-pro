
const express = require('express');
const path = require('path'); 
const pageNewCD = express.Router();
const generateCD = require('../static/index.js');

pageNewCD.use;

pageNewCD.use(express.json());

pageNewCD.get('/new', (req, res) => {
  const filePath = path.join(__dirname, '../static/views/new.html');
  res.sendFile(filePath);
});

pageNewCD.post('/new', (req, res) => {
    if(generateCD(req) != null){
      var response = generateCD(req); // Obtener respuesta
      res.send(response);
    } else{
      console.log("error");
    }
   
});

module.exports = pageNewCD;