import express from "express";
import createcontroller from '../controllers/mangas/create.js'
import get_mangaController from '../controllers/mangas/get_mangas.js'
import showcontroller from '../controllers/categories/showAll.js'
import get_one_controller from '../controllers/mangas/get_one.js';
import exists_title from '../middlewares/exists_title.js';
import validator from '../middlewares/validator.js'
import schema from '../schemas/mangas.js'
import passport from "../middlewares/passport.js";
import get_me_controller from '../controllers/mangas/get_me.js'
import find_id from '../middlewares/auth/find_id.js'
import update_controller from '../controllers/mangas/update.js'
import schema_update from '../schemas/update_maga.js'
import is_active from '../middlewares/authors/is_active.js'
import is_property_of from '../middlewares/authors/is_property_of.js'
import destroy_controller from '../controllers/mangas/destroy.js'

let router = express.Router()
let { create } = createcontroller
let { showAll } = showcontroller
let {get_mangas} = get_mangaController
let { get_one } = get_one_controller
let { get_me } = get_me_controller
let { update } = update_controller
let { destroy } = destroy_controller


router.get('/me',passport.authenticate('jwt', {session: false}), find_id, get_me)
router.get('/category-manga', showAll)
router.get('/', passport.authenticate('jwt', {session: false}), get_mangas)
router.get('/:id', passport.authenticate('jwt', {session: false}), get_one)
router.post('/',passport.authenticate('jwt', {session: false}), validator(schema), exists_title, create)
router.put('/:id',passport.authenticate('jwt', {session: false}), validator(schema_update), find_id, is_active, exists_title, update)
router.delete('/:id',passport.authenticate('jwt', {session: false}), find_id, is_active, destroy)



export default router