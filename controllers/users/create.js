import User from "../../models/User";


const controller = {

    create:async (req, res) => {
        try {
          let user = await User.create(req.body)
          return res.status(201).json({
            success: true,
            user: user,
          })
        } catch (error) {
          console.log(error);
          return res.status(400).json({
            success: false,
            message: 'No se pudo crear'
          })
        }
    
      }

}

export default controller