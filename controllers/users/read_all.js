import User from "../../models/User.js";

const controller = {

    read_all: async(req, res) => {

      try{
        const _id = req.query.id
        console.log(req.query.id);
        if (!_id) return res.status(404).json('Verify Code not found...')

        const user = await User.findOne({_id})
        if(user){
          return res
          .status(200)
          .json({
            success:true,
            is_verify:user.is_verified,
            verify_code:user.verify_code
          });
        }else res.status(404).json('Mail verification failed, invalid token')

      }catch(error){
        console.log(error)
        res.status(500).json(error.message)
      }

        
    }

}

export default controller