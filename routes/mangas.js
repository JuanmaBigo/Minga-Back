import  express  from "express";
let router = express.Router()
import Manga from "../models/Manga.js";

router.get('/', (req,res) => {
    return res
        .status(200)
        .send('pagina de mangas')
})

router.post('/', async (req,res) =>{
    try {
        let manga = await Manga.create(req.body)
        return res.status(201).json({
            response: 'created',
            manga: req.body
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            response: error.message 
        })
    }
})

export default router