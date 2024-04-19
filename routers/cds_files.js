const express = require('express');
const path = require("path");
var fs = require("fs");
const app = express();
const routerCDFiles = express.Router();

routerCDFiles.get('/generate-cds/:file', (req, res) => {
    var file = req.params.file
    const dir = path.join(__dirname, '../static/public/generate-cds/');
    var filePath = dir + file;
    res.sendFile(filePath);
})

module.exports = routerCDFiles;

