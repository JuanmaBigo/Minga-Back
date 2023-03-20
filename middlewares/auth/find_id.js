import Author from "../../models/Author.js";


async function finds_id(req,res,next){
    const author = await Author.findOne({user_id: req.user.id})
    console.log(author);
    if(author){
        req.body.author_id = author._id
        // console.log({ user: req.user });
        return next()
    }


    return res.status(400).json({
        success: false,
        message: 'No authors founded'
    })
}

export default finds_id