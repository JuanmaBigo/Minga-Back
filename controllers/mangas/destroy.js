import Manga from "../../models/Manga.js";
import Chapter from '../../models/Chapter.js'

const controller = {

    destroy: async (req,res,next) => {

        try {
            let manga = await Manga.deleteOne({ _id: req.params.id})
            if ( manga ){
                let chaters = await Chapter.deleteMany({ manga_id: req.params.id})
                return res 
                    .status(200)
                    .json({
                        succes: true,
                        message: 'Manga deleted!!'
                    })
            }
        } catch (error) {
            next(error)
        }
    }
}

export default controller