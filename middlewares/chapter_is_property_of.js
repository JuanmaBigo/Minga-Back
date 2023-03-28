import Manga from '../models/Manga.js'
import Chapter from '../models/Chapter.js'

async function chapter_is_property_of(req,res,next){
    try{
    let chapter = await Chapter.findOne({_id: req.params.id})
    if (chapter){
        const manga = await Manga.find({ _id: chapter.manga_id, author_id: req.body.author_id })
        if(manga){
            return next()
        }
    }
    return res.status(400).json({
        success: false,
        message: 'Chapter does not exist or you are not the author of the manga this chapter belongs to'
    })
}catch(err){
    next(err)
}
}

export default chapter_is_property_of