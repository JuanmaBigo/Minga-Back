import  express  from "express";
import createcontroller from '../controllers/mangas/create.js'
import showcontroller from '../controllers/categories/showAll.js'
import exists_tittle from "../middlewares/exists_tittle.js";
let router = express.Router()
let { create } = createcontroller
let { showAll } = showcontroller



router.get('/', showAll)
router.post('/', exists_tittle, create)



export default router