async function accountHasBeenVerified(req,res,next) {
    if (req.user.is_verified) {
        return next()
    }
    	  return res.status(400).json({
            success:true,
            message:'has not been verified!',
            data:req.body
          })
}

export default accountHasBeenVerified