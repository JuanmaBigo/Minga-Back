import Chapter from "../../models/Chapter.js";

const controller = {
    
    showOne: async(req,res,next) => {
        try {
            let chapter = await Chapter.findOne({ _id: req.params.id })
                .select('-_id -updatedAt -createdAt -__v')
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