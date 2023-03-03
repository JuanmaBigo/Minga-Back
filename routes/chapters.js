import express from 'express';
import controller from '../controllers/chapters/create.js';
import exists_order from '../middlewares/exists_order.js';
import next_order from '../middlewares/next_order.js';
import validator from '../middlewares/validator.js';
import schema from '../schemas/chapters.js';
import add_front_photo from '../middlewares/add_front_photo.js'



let router = express.Router();

const { create } = controller;

// req.user debe traer la data del usuario autenticado

router.post('/create', validator(schema), exists_order, next_order, add_front_photo, create);


export default router;