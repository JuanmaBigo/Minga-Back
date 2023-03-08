import Manga from "../../models/Manga.js"

const controller = {
    get_mangas: async (req,res,next) => {
        let filter = {}
        if(req.query.category){
            const categories = req.query.category.split(',');
            filter.category = { $in: categories };
        }
        if(req.query.title){
            filter.title = new RegExp(req.query.title,'i') 
        }
        try{
            let get_mangas = await Manga.find(filter).select('title -_id')
            return res
            .status(200)
            .json({ mangas: get_mangas })
        }catch(error){
            next(error)
        }
    }
}

export default controller