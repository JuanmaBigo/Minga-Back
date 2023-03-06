import Manga from '../models/Manga.js'

async function exists_tittle(req,res,next){
    const tittle = await Manga.findOne( { tittle: req.body.tittle })
    if(tittle){
        return res.status(400).json({
            success: false,
            message: 'Tittle already exists!'
        })
    }
    return next()
}

export default exists_tittle