import Manga from "../../models/Manga.js";

const controller = {
    get_one: async (req, res) => {

        let manga = await Manga.findOne({ _id: req.params.id })

        if (manga) {
            return res
                .status(200)
                .json({ manga: manga })
        }
        return res.status(400).json({
            success: false,
            message: 'manga does not exist',
        })
    }
}

export default controller