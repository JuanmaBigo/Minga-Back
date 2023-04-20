import Author from '../../models/Author.js'

const controller = {
    create: async (req,res,next) =>{
        
        const {user} = req
        req.body.user_id = user._id
        req.body.active = false
        try {
            let author = await Author.create(req.body)
            return res.status(201).json({
                success: true,
                response: 'Author successfully created',
                author
            })
            
        } catch (error) {
            next(error)
        }
    }
}

export default controller