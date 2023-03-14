import createError from 'http-errors'

export function errorNotFound(req, res, next){
    next(createError(404, "route does not exist"))
}

export function errorHandler(err, req, res, next){
    console.error(err.stack)
    res.status(err.status || 500).json({
        status: err.status,
        message: err.message
    })
}