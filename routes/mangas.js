import  express  from "express";
import createcontroller from '../controllers/mangas/create.js'
import showcontroller from '../controllers/categories/showAll.js'
import exists_title from "../middlewares/exists_title.js";
import validator from '../middlewares/validator.js'
import schema from '../schemas/mangas.js'
let router = express.Router()
let { create } = createcontroller
let { showAll } = showcontroller



router.get('/', showAll)
router.post('/', validator(schema), exists_title, create)



export default router