import express from 'express';
import controller from '../controllers/chapters/create.js';
import exists_order from '../middlewares/exists_order.js';
import next_order from '../middlewares/next_order.js';
import validator from '../middlewares/validator.js';
import schema from '../schemas/chapters.js';
import add_front_photo from '../middlewares/add_front_photo.js';
import passport from '../middlewares/passport.js';

import get_chapters_controller from '../controllers/chapters/get_chapters.js';

import showOneChapterController from '../controllers/chapters/get_one.js'




let router = express.Router();


const { showOne } = showOneChapterController
const { create } = controller;
const { get_chapters } = get_chapters_controller;

router.get('/', get_chapters)
router.get('/:id',showOne)
router.post('/', passport.authenticate('jwt', {session: false}), validator(schema), exists_order, next_order, add_front_photo, create);


export default router;
