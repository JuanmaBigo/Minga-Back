import Chapter from "../../models/Chapter.js";

const controller = {
    
    showOne: async(req,res,next) => {
        try {
            let chapter = await Chapter.findOne({ _id: req.params.id })
                .select('pages -_id')
                .sort({ pages: 1})
                return res.status(200).json({
                    success: true,
                    chapter
                })
        } catch (error) {
            next()
        }
    }
}

export default controller