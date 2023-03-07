async function is_active(req, res, next) {
    if (req.body.active === true) {
        return next()
    }

    return res.status(400).json({
        success: false,
        message: 'Author not Active!',
    })
}

export default is_active