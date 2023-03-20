import User from '../../models/User.js'
import createError from 'http-errors'

const controller = {

    get_me: async (req,res,next) => {
        try {
            let user = await User.findById({ _id: req.user._id})
            if( user ){
                return res 
                    .status(200)
                    .json({
                        succes: true,
                        user
                    })
            }
            return next(createError(404, 'User dont Found'))
        } catch (error) {
            next(createError(400, error))
        }
    }

}

export default controller