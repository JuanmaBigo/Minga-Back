import Company from '../models/Company.js'

async function exists_name(req,res,next){

    const name = await Company.findOne( { name: req.body.name })
    if ( name ){
        return res 
        .status(400)
        .json({
            success: false,
            message: 'This company name already exists!!'
        })
    }
    return next()

}

export default exists_name