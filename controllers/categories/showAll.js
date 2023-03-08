import Category from '../../models/Category.js'

const controller = {
    showAll: async(req,res,next)=> {
        try {
            let categories = await Category.find()
            if (categories) {
                return res.status(200).json({
                    success: true,

                    message: "categories",

                    categories
                })
            } else {
                return res.status(200).json({
                    success: true,
                    message: "No categories yet",
                    categories: categories
                })
            }    
        } catch(error) {
            next(error)
        }
    }
}

export default controller