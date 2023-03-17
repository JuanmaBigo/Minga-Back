import Author from "../../models/Author.js";
import createError from "http-errors";

const controller = {
    update: async(req,res,next)=> {
        try {
            let upd = await Author.findOneAndUpdate(
                    { user_id:req.user},
                    req.body,
                    { new: true }
                    )

            if (upd) {
                return res.status(200).json({ 
                    success:true,
                    upd })
            } else {
                return next(createError(404,'not found'))
            } 
        } catch(error) {
            next(error)
        }
    }
   }
export default controller