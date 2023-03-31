import Company from '../../models/Company.js'
import User from '../../models/User.js'

const controller = {

    updateCompany_active: async (req,res,next) => {
        try {
            let company = await Company.findByIdAndUpdate(
                req.params.id,
                { active: true }
            )
            if ( company ){
                await User.findByIdAndUpdate(
                    { _id: company.user_id},
                    { is_company: true}
                )
            }
            return res
                .status(200)
                .json({
                    message: 'Company is active now!'
                })
        } catch (error) {
            next(error)
        }
    }
}

export default controller