import Manga from "../../models/Manga.js"
import createError from 'http-errors';

const controller = {
    get_mangas: async (req,res,next) => {
        let filter = {}
        let pagination = {
            page:1,
            limit:6
        }
        
        if(req.query.page){
            pagination.page = req.query.page
        }
        let skip = pagination.page > 1 ? (pagination.page-1)*pagination.limit : 0

        if(req.query.category_id){
            const categories = req.query.category_id.split(',');
            filter.category_id = { $in: categories };
            pagination.limit=10
            
        }
        if(req.query.title){
            filter.title = new RegExp(req.query.title.trim(),'i') 
            pagination.limit=10
            skip = 0
        }
        
        try{
            let get_mangas = await Manga.find(filter)
                .select('title cover_photo _id')
                .populate('category_id','name -_id')
                .sort({title:1})
                .skip( skip )
                .limit(pagination.limit > 0 ? pagination.limit : 0 )
                


            if (get_mangas.length){
                return res
                .status(200)
                .json({ 
                    success:true,
                    mangas: get_mangas 
                })
            }
            return next(createError(404, 'Mangas does not exist'))
            
        }catch(err){
            next(err)
        }
    }
}

export default controller