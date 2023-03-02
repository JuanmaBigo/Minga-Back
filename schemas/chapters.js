import Joi from "joi-oid"

const schema = Joi.object({
    manga_id: Joi
        .objectId()
        .required()
        .messages({
            'invalid': 'manga_id is not an objectId'
        }),
    title: Joi
        .string()
        .required()
        .min(2)
        .max(30)
        .messages({
            'string.min': 'The title must be at least 2 characters long',
            'string.max': 'The title must be 30 characters long max',
            'string.empty': 'The title cannot be empty',
            'any.required': 'A title is required'
        }),
    // cover_photo: Joi
    //     .string()
    //     .required()
    //     .uri()
    //     .messages(
    //         {
    //             'string.empty': 'The photo field cannot be empty',
    //             'any.required': 'A photo is required',
    //             'string.uri': 'A valid URL is necessary for the cover photo'
    //         }),
    pages: Joi
        .array().items(
            Joi
                .string()
                .required()
                .uri()
                .messages(
                    {
                        'string.any': 'Page field must be a URL',
                        'string.empty': 'The page field cannot be empty',
                        'string.uri': 'A valid URL page is necessary',
                        'string.required': 'At least a page is required', //como hago para que cuando mando un array vacio sate esto
                    }))
        .required()
        .messages(
            {
                'array.base': 'Pages must be an array of URLs',
                'array.empty': 'The pages field cannot be empty',
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