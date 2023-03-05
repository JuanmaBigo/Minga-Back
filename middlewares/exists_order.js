import Chapter from '../models/Chapter.js'

async function exists_order(req, res, next) {
    const order = await Chapter.findOne({ order: req.body.order, manga_id: req.body.manga_id })
    if (!order) {
        return next()
    }

    return res.status(400).json({
        success: false,
        message: 'order already exists!',
    })
}

export default exists_order