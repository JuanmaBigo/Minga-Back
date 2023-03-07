import Joi from "joi";

const schema = Joi.object({
    title: Joi
        .string()
        .required()
        .min(4)
        .max(30)
        .messages({
            'string.min': 'The title must be at least 4 characters long',
            'string.max': 'The title must be 30 characters long max',
            'string.empty': 'A title is required',
            'any.required': 'A title is required'
        }),
        category: Joi
        .string()
        .required(),
        description: Joi
        .string()
        .required()
        .min(8)
        .max(300)
        .messages({
            'string.min': 'The Description must be at least 8 characters long',
            'string.max': 'The Description must be 30 characters long max',
            'string.empty': 'A Description is required',
            'any.required': 'A Description is required'
        }),

})


export default schema