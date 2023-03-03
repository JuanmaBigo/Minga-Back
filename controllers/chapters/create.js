import Chapter from "../../models/Chapter.js";

const controller = {
    create: async (req, res) => {
        try {
            await Chapter.create(req.body)
            return res.status(201).json({
                success: true,
                chapter: req.body,
                user: req.user
            })
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                success: false,
                message: 'No se pudo crear'
            })
        }
    }
}

export default controller