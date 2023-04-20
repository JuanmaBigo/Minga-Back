import Joi from "joi-oid";

const schema = Joi.object({
    name: Joi
        .string()
        .required()
        .min(5)
        .max(30)
        .message({
            'string.min': 'Name must be at least 5 characters long',
            'string.max': 'Name must be 30 characters long max',
            'string.empty': 'Name is required',
            'any.required': 'Name is required'
        }),
    website: Joi
        .string()
        .uri()
        .required()
        .min(5)
        .max(30)
        .message({
            'string.min': 'Website must be at least 5 characters long',
            'string.max': 'Website must be 30 characters long max',
            'string.empty': 'Website is required',
            'any.required': 'Website is required'
        }),
    logo: Joi
        .string()
        .uri()
        .required()
        .min(5)
        .message({
            'string.min': 'Logo must be at least 5 characters long',
            'string.empty': 'Logo is required',
            'any.required': 'Logo is required'
        }),
    description: Joi
        .string()
        .required()
        .min(5)
        .max(50)
        .message({
            'string.min': 'Descripcion must be at least 5 characters long',
            'string.max': 'Descripcion must be 30 characters long max',
            'string.empty': 'Descripcion is required',
            'any.required': 'Descripcion is required'
        })

})

export default schema