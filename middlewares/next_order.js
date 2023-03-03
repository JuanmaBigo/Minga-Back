import Chapter from '../models/Chapter.js'

async function next_order(req, res, next) {
    if (req.body.order)
        return next()
    else {
        let manga = await Chapter.find({ manga_id: req.body.manga_id })
        if (manga !== "") {
            req.body.order = manga.length++;
        } else {
            req.body.order = 1;
        }
        return next()
    }
}

export default next_order