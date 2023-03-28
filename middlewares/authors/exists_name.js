import Author from '../../models/Author.js'

async function exists_name(req,res,next){

    const fullName = await Author.findOne( { name: req.body.name, last_name: req.body.last_name})
    if ( fullName ){
        return res
        .status(400)
        .json({
            success: false,
            message: 'This Authors name already exists!!'
        })
    }
    return next()
}

export default exists_name