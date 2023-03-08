import  express  from "express";
import createcontroller from '../controllers/mangas/create.js'
import get_mangaController from '../controllers/mangas/get_mangas.js'
import showcontroller from '../controllers/categories/showAll.js'
import exists_title from "../middlewares/exists_title.js";
import validator from '../middlewares/validator.js'
import schema from '../schemas/mangas.js'
let router = express.Router()
let { create } = createcontroller
let { showAll } = showcontroller
let {get_mangas} = get_mangaController


router.get('/category-manga', showAll)
router.get('/', get_mangas)
router.post('/', validator(schema), exists_title, create)



export default router