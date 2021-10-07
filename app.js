'use strict'
import express from 'express';
import { urlencoded, json } from 'body-parser';
var app = express();
//cargar rutas
import auto_routes from './routes/auto_routes';

//body-parser
//creando un midleway
app.use(urlencoded({extended:false}));
app.use(json());

//configurar CORS

//rutas base
app.use('/api',auto_routes);
export defaultapp;