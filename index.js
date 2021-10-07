'use strict'
import express from 'express'
const app = express()
var mongoose= require('mongoose');

var app = require('./app');
var port = 3800;
mongoose.Promise= global.Promise;
//haciendo la conexion
//mongoose.connect('mongodb://localhost:27017/curso_mongo',{useMongoClient:true})
mongoose.connect('mongodb://localhost:27017/consecionaria')
        .then(()=>{
            console.log('La conexión a mongodb se ha realizado correctamente!!');
            app.listen(port,()=>{
                console.log('El servidor esta corriendo en localhost:3800');
            });
        })
        .catch(err =>console.log(err));