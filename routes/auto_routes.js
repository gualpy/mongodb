'use strict'

var express = require('express');
var AutoController = require('../controllers/auto_controller');
var api = express.Router(); //permite crear rutas y pasar funciones y parametros
api.get('/pruebas',AutoController.pruebas);
api.post('/auto',AutoController.saveAuto)//ruta para guardar por POST
module.exports= api;