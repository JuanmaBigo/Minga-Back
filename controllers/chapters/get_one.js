import Chapter from "../../models/Chapter.js";

const controller = {
    showOne: async(req,res,next) => {
        try {
            let chapter = await Chapter.find()
            if( chapter ) {
                return res.status(200).json({
                    success: true,
                    chapter: chapter
                })
            }
        } catch (error) {
            next()
        }
    }
}

export default controller