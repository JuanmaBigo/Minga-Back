import Chapter from "../../models/Chapter.js";
import createError from 'http-errors';

const controller = {
    update: async (req, res, next) => {
        try {
            let chapter = await Chapter.updateOne(
                { _id: req.params.id },
                {
                    title: req.body.title,
                    cover_photo: req.body.cover_photo,
                    pages: req.body.pages,
                    order: req.body.order
                }
            )
            if (chapter.matchedCount === 1) {
                return res
                    .status(200)
                    .json({
                        success: true,
                        message: "updated!",
                    })
            }
            return next(createError(404, 'Chapter does not exist'))
        } catch (err) {
            next(err)
        }
    }
}

export default controller