import createError from 'http-errors'

export function errorNotFound(req, res, next){
    next(createError(404, "route does not exist"))
}

export function errorHandler(err, req, res, next){
    console.error(err.stack)
    let body = {
        success:false,
        status: err.status,
        message: err.message
    }
    if (err.status === 404) {
        body.manga = {}
    }
    res.status(err.status || 500).json(body)
}