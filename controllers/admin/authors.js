import Author from '../../models/Author.js'
import User from '../../models/User.js';

const controller = {

    update_active: async (req,res,next) => {
        try {
            let author = await Author.findByIdAndUpdate(
                req.params.id,
                { active: true}
            )
            if ( author ){
                await User.findByIdAndUpdate(
                    { _id: author.user_id},
                    { is_author: true}
                )
                return res
                    .status(200)
                    .json({
                        message: 'Author is active now!'
                    })
            }
        } catch (error) {
            next(error)
        }
    }
}

export default controller