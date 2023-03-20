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

let router = express.Router()
let { create } = createcontroller
let { showAll } = showcontroller
let {get_mangas} = get_mangaController
let { get_one } = get_one_controller
let { get_me } = get_me_controller

router.get('/me', passport.authenticate('jwt',{session: false}), find_id, get_me)
router.get('/category-manga', showAll)
router.get('/', get_mangas)
router.get('/:id', passport.authenticate('jwt', {session: false}), get_one)
router.post('/',passport.authenticate('jwt', {session: false}), validator(schema), exists_title, create)



export default router