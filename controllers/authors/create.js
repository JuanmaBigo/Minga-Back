import Author from '../../models/Author.js'

const controller = {
    create: async (req,res) =>{
        
        const {user} = req
        req.body.user_id = user._id
        req.body.active = true
        try {
            let author = await Author.create(req.body)
            return res.status(201).json({
                success: true,
                response: 'Author created',
                author: author
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