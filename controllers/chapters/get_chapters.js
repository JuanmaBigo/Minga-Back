import Chapter from "../../models/Chapter.js"

const controller = {
    get_chapters: async (req, res) => {

        let query = {}
        let pagination = { page: 1, limit: 4 }
        if (req.query.page) { pagination.page = req.query.page }
        if (req.query.manga_id) { query.manga_id = req.query.manga_id }

        try {
            let chapters = await Chapter.find({ manga_id: query.manga_id })
                .select("title order -_id")
                .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
                .limit(pagination.limit > 0 ? pagination.limit : 0)
                .populate("_id")
                
                
            return res
                .status(200)
                .json({ chapters: chapters })
        } catch {
            return res.status(400).json({
                success: false,
                message: 'There are no chapters for that manga',
            })
        }
    }
}

export default controller