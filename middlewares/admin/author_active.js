import Author from "../../models/Author.js";

async function authorActive(req,res,next){

    const author = await Author.findById( req.params.id )
    if ( author.active ){
        return res
            .status(400)
            .json({
                message: 'Author is already active!'
            })
    }
    return next()
}

export default authorActive