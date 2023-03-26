import Chapter from "../../models/Chapter.js";
import createError from 'http-errors';

const controller = {
    destroy: async (req, res, next) => {
        try {
            let chapter = await Chapter.deleteOne({ _id: req.params.id })
            if (chapter.deletedCount === 1) {
                return res
                    .status(200)
                    .json({
                        success: true,
                        message: "chapter deleted!",
                    })
            }
            return next(createError(404, 'Chapter does not exist'))
        } catch (err) {
            next(err)
        }
    }
}

export default controller