import Chapter from "../../models/Chapter.js"
import createError from 'http-errors'

const controller = {
    get_chapters: async (req, res, next) => {

        let query = {}
        let pagination = { page: 1, limit: 4 }
        if (req.query.page) { pagination.page = req.query.page }
        if (req.query.manga_id) { query.manga_id = req.query.manga_id }

        try {
            let chapters = await Chapter.find(query)
                .select("title order")
                .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
                .limit(pagination.limit > 0 ? pagination.limit : 0)

            let count = await Chapter.find(query).countDocuments()

            if (count) {
                return res
                    .status(200)
                    .json({ chapters: chapters, count })
            }
            return next(createError(404, 'Manga does not exist'))

        } catch(error) {
            next(error)
        }
    }
}

export default controller