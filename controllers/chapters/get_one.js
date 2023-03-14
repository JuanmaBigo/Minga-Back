import Chapter from "../../models/Chapter.js";

const controller = {

    showOne: async (req, res, next) => {
        try {


            // Busco por el ID
            let chapter = await Chapter.findById(req.params.id)
                .select('-__v -updatedAt -createdAt -_id')

            // Tengo que buscar el siguiente a partir del chapter ya encontrado
            let next = await Chapter.findOne({manga_id: chapter.manga_id, order: chapter.order + 1 })
            let prev = await Chapter.findOne({manga_id: chapter.manga_id, order: chapter.order - 1 })
            
            if (chapter) {

                return res.status(200).json({
                    success: true,
                    chapter,
                    prev: prev?._id,
                    next: next._id
                })
            }

            return res.status(404).json({
                success: false,
            })

        } catch (error) {
            next(error)
        }
    }
}

export default controller