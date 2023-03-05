import Manga from "../../models/Manga.js";

const controller = {
    create: async (req,res) =>{
        try {
            let manga = await Manga.create(req.body)
            return res.status(201).json({
                response: 'created',
                manga: req.body
            })
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                response: error.message 
            })
        }
    }
}

export default controller