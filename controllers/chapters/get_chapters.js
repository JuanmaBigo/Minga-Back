import Chapter from "../../models/Chapter.js"

const controller = {
    get_chapters: async (req,res) => {

        let query = {}
        if (req.query.manga_id){
            query.manga_id = req.query.manga_id
        }

        let chapters = await Chapter.find({ manga_id: query.manga_id })

        if (chapters.length !== 0){
            return res
            .status(200)
            .json({ chapters: chapters })
        }
        return res.status(400).json({
            success: false,
            message: 'There are no chapters for that manga',
        })
    }
}

export default controller