import Company from "../../models/Company.js";

async function companyActive(req,res,next){

    const company = await Company.findById( req.params.id )
        if ( company.active ){
            return res
                .status(400)
                .json({
                    message: 'Company is already active!'
                })
        }
        return next()
}

export default companyActive
