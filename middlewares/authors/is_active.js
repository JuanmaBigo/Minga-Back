import Author from "../../models/Author.js"

async function is_active(req,res,next){
    const author = await Author.findOne({user_id:req.user._id})
    if(author){
        if(author.active){
            next()
        } else {
            return res.status(400).json({
                success: false,
                message: 'Author is not active'
            })
        }
    } else {
        return res.status(400).json({
            success: false,
            message: 'No authors founded'
        })
    }
}

export default is_active