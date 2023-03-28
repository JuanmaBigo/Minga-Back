import express from 'express';
import passport from '../middlewares/passport.js';
import exists_order from '../middlewares/exists_order.js';
import next_order from '../middlewares/next_order.js';
import validator from '../middlewares/validator.js';
import schema from '../schemas/chapters.js';
import add_front_photo from '../middlewares/add_front_photo.js';
import controller from '../controllers/chapters/create.js';
import getChaptersController from '../controllers/chapters/get_chapters.js';
import showOneChapterController from '../controllers/chapters/get_one.js'
import updateChapterController from '../controllers/chapters/update.js'
import destroyChapterController from '../controllers/chapters/destroy.js'
import find_id from '../middlewares/auth/find_id.js';
import is_active from '../middlewares/authors/is_active.js';
import chapter_is_property_of from '../middlewares/chapter_is_property_of.js';
import exists_order_update from '../middlewares/exists_order_update.js';
import schemaUpdate from '../schemas/chaptersUpdate.js';




let router = express.Router();


const { showOne } = showOneChapterController
const { create } = controller;
const { get_chapters } = getChaptersController;
const { update } = updateChapterController;
const { destroy } = destroyChapterController;



router.post('/', passport.authenticate('jwt', {session: false}), validator(schema), exists_order, next_order, add_front_photo, create);
router.get('/', passport.authenticate('jwt', {session: false}), get_chapters)
router.get('/:id',showOne)
router.put('/:id', passport.authenticate('jwt', {session: false}),validator(schemaUpdate), find_id, is_active, chapter_is_property_of, exists_order_update, update);
router.delete('/:id', passport.authenticate('jwt', {session: false}), find_id, is_active, chapter_is_property_of, destroy);


export default router;
