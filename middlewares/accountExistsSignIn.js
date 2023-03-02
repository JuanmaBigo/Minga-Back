import User from '../models/User.js'

async function accountExistsSignIn(req,res,next) {
    const user = await User.findOne({email: req.body.email})
    if (user) {
  req.user = {
            id: user._id,
            email: user.email,
            photo: user.photo,
            password: user.password,
            is_admin: user.is_admin,
            is_author: user.is_author,
            is_company: user.is_company,
            is_verified: user.is_verified
        }
        return next()
    }
    	  return res.status(400).json({
            success:true,
            message:'user does not exist!',
            data:req.body
          })
}

export default accountExistsSignIn