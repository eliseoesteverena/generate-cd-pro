const express = require('express');
const app = express();

var {create} = require("pdf-creator-node");

var fs = require("fs");
var path = require("path");

const routerNewCD = require('../routers/new.js')
/*
const pageNewCD = express.Router();
pageNewCD.use;
pageNewCD.use(express.json());*/

module.exports = function (req) {

    // HTML Template
    var html = fs.readFileSync(path.join(__dirname, "./public/template.html"), "utf-8");

    var options = {
    format: "legal",
    orientation: "portrait",
    border: "0mm",
    };

    var remitente = [
    {
    name: req.body.remitente.name,
    adress: req.body.remitente.adress,
    cp: req.body.remitente.cp,
    city: req.body.remitente.city,
    state: req.body.remitente.state
    }
    ];
    var destinatario = [
    {
    name: req.body.destinatario.name,
    adress: req.body.destinatario.adress,
    cp: req.body.destinatario.cp,
    city: req.body.destinatario.city,
    state: req.body.destinatario.state
    }
    ];
    // Entrada - Tratamiendo de cuerpo:
    cuerpo_text = req.body.cuerpo.body_cd;

    // Arreglo. Un campo por cada salto de linea:
    var cuerpo_arr = cuerpo_text.split('\n');

    // Arreglo que tendrá el contenido del cuerpo
    var text = [];

    for(let i = 0; i < cuerpo_arr.length; i++){
    var linea_obj = text[i]; // Posición del objeto dentro del array text[]
    linea_obj = {cuerpo: cuerpo_arr[i]}; // Creación del par clave/valor
    text.push(linea_obj);
    }
    // Asignación para la funcion create()
    var cuerpo = text;

    var firma = [
    {
        name: req.body.firma.name,
        dni: req.body.firma.dni
    }
    ]
    var margen_izq = [
    {
        margen_izq: req.body.margenes.m_left
    }
    ]
    var margen_sup = [
    {
        margen_sup: req.body.margenes.m_top
    }
    ]
    // Utilizar fecha y hora para el nombre del archivo:
    var date = function() {
    // Obtener la fecha y hora actual
    var date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth(); 
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    date = `${year}${month}${day}${hours}${minutes}${seconds}`;

    return date;
    }
    var folder = "./static/"
    var path_url = "public/generate-cds/";
    var name_file = date() + ".pdf";
    var file_url = path_url + name_file;

    // Generar archivo:
    var document = {
    html: html,
    data: {
        margen_izq: margen_izq,
        margen_sup: margen_sup,
        destinatario: destinatario,
        remitente: remitente,
        cuerpo: cuerpo,
        firma: firma
    },
    path: folder + file_url,
    type: "",
    };
    // By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.

    create(document, options)
    .then((res) => {
        //console.log(file_url);
        
    })
    .catch((error) => {
        //console.error(error);
    });
    return name_file
};

