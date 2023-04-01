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
    },

    getAll_companies: async (req,res,netx) => {
        try {
            let companies = await Company.find()
            if ( companies ){
                let activeCompanies = companies.filter( company => company.active)
                let inactiveCompanies = companies.filter( company => !company.active)
                return res
                    .status(200)
                    .json({
                        message: 'Companies:',
                        activeCompanies,
                        inactiveCompanies
                    })
            }
        } catch (error) {
            next(error)
        }
    }
}

export default controller