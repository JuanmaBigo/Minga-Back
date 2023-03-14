import Manga from '../../models/Manga.js'

async function is_property_of(req,res,next){
    const manga = await Manga.findOne({  author_id: req.body.author_id, manga_id: req.body.manga_id })
    if(manga){
        next()
    }
    return res.status(400).json({
        success: false,
        message: 'No matches found'
    })
}

export default is_property_of