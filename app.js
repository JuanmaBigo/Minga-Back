import express from 'express';  // Modulo necesario para crear todo
import path from 'path'; // Modulo para manejar rutas
import 'dotenv/config.js'
import './config/database.js'
import cookieParser from 'cookie-parser'; // Libreria para manejar cookies
import logger from 'morgan';  // Libreria para manejar logs
import indexRouter from './routes/index.js';
// Traen las rutas de los endpoints
import { __dirname } from './utils.js';

let app = express(); // Define la aplicacion de back ejecutando el modulo de express

// view engine setup // app.set define variables de configuracion
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// app.use es para agregar middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);

// module.exports = app;
export default app;
