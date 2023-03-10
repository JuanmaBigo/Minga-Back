import Manga from "../../models/Manga.js";

const controller = {
    get_one: async (req, res) => {
        try {
            let manga = await Manga.findById(req.params.id)
                .select("title cover_photo description -_id")

            return res
                .status(200)
                .json({ manga: manga })
        } catch {
            return res.status(400).json({
                success: false,
                message: 'manga does not exist',
            })
        }
    }
}

export default controller