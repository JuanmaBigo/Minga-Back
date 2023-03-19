import Author from "../../models/Author.js"
async function finds_id(req, res, next) {
    const author = await Author.findOne({ user_id: req.user.id })
    if (author) {
        req.body.active = author.active
        return next()
    }

    return res.status(400).json({
        success: false,
        message: 'No authors founded 123'
    })
}

export default finds_id