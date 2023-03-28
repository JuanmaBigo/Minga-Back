import Company from '../../models/Company.js'

const controller = {

    read_all: async(req,res,next) => {
        try {
            let company = await Company.find()
            if ( company ){
                return res 
                .status(200)
                .json({
                    succes: true,
                    company
                })
            }
        } catch (error) {
            next(error)
        }
    }
}

export default controller