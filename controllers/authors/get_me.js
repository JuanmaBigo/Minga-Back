import Author from "../../models/Author.js";
import createError from 'http-errors';

const controller = {

    get_me:async(req,res,next)=>{
        try{
            let author = await Author.findOne({user_id: req.user})
            if(author){
                return res.status(200).json({
                    success:true,
                    author
                })
            }
            return next(createError(404,'No author Found'))
        }catch(err){
            next(createError(400,err))
        }

    }

}

export default controller