import Manga from "../../models/Manga.js"

const controller = {
    get_mangas: async (req,res,next) => {
        let filter = {}
        let pagination = {
            page:1,
            limit:6
        }
        if(req.query.category){
            const categories = req.query.category.split(',');
            filter.category = { $in: categories };
            pagination.limit=10
            
        }
        if(req.query.title){
            filter.title = new RegExp(req.query.title.trim(),'i') 
            pagination.limit=10
            
        }
        if(req.query.page){
            pagination.page = req.query.page
        }
        try{
            let get_mangas = await Manga.find(filter)
                .select('title -_id')
                .sort({title:1})
                .skip( pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0 )
                .limit(pagination.limit > 0 ? pagination.limit : 0 )

            return res
            .status(200)
            .json({ mangas: get_mangas })
        }catch(error){
            next(error)
        }
    }
}

export default controller