import Joi from "joi-oid"

const schema = Joi.object({
    title: Joi
        .string()
        .min(2)
        .max(30)
        .messages({
            'string.min': 'The title must be at least 2 characters long',
            'string.max': 'The title must be 30 characters long max',
            'string.empty': 'A title is required',
            'any.required': 'A title is required'
        }),
    cover_photo: Joi
        .string() 
        .uri()
        .messages(
            {
                'string.empty': 'The photo field cannot be empty',
                'any.required': 'A photo is required',
                'string.uri': 'A valid URL is necessary for the cover photo'
            }),
    pages: Joi
        .array().items(
            Joi
                .string()
                .uri()
                .messages(
                    {
                        'string.any': 'Page field must be a URL',
                        'string.empty': 'The pages field cannot be empty',
                        'string.uri': 'A valid URL page is necessary',
                    }))
        .messages(
            {
                'array.base': 'Pages must be an array of URLs',
                'any.required': 'An array of pages is required',
            }),
    order: Joi
        .number()
        .min(0)
        .max(99999)
        .messages(
            {
                'number.base': 'Order must be a number',
                'number.max': 'Chapter order must be less than 99999',
                'number.min': 'Chapter order cannot be negative'
            })
})

export default schema