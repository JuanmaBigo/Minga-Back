import createError from 'http-errors'

export function errorNotFound(req, res, next){
    next(createError(404, "route does not exist"))
}

export function errorHandler(err, req, res, next){
    console.error(err.stack)
    let body = {
<<<<<<< HEAD
        success:false,
        status: err.status,
        message: err.message
    }
    if (err.status === 404) {
        body.manga = {}
    }
=======
        status: err.status,
        message: err.message
    }
    
>>>>>>> 33152d92a6c30f16c873c600480bbe7fffb0b274
    res.status(err.status || 500).json(body)
}