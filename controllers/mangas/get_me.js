import Manga from '../../models/Manga.js'

const controller = {

    get_me: async (req,res,next) => {

        try {
            let mangas = await Manga.find({ author_id: req.body.author_id})
                .select('title cover_photo category_id author_id')
                .populate('author_id', 'name last_name -_id')
                .populate('category_id', 'name -_id')
            if( mangas ){
                return res
                    .status(200)
                    .json({
                        success: true,
                        mangas
                    })
            }
        console.log(mangas);
        } catch (error) {
            next(error)
        }
        
    }

}

export default controller