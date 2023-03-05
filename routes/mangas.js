import  express  from "express";
import createcontroller from '../controllers/mangas/create.js'
import showcontroller from '../controllers/categories/showAll.js'
let router = express.Router()
let { create } = createcontroller
let { showAll } = showcontroller



router.get('/', showAll)
router.post('/', create)



export default router