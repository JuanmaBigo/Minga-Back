import Manga from "../../models/Manga.js";
import Company from "../../models/Company.js"
import createError from 'http-errors'

const controller = {
    get_one: async (req, res, next) => {
        try {
            let manga = await Manga.findById(req.params.id)
                .select("title cover_photo description -_id")
                .populate("company_id", "name -_id")
                .populate("category_id", "name -_id")
            if (manga) {
                return res
                    .status(200)
                    .json({ manga: manga })
            }
            return next(createError(404, 'Manga does not exist'))
        } catch (error) {
            next(error)
        }
    }
}

export default controller