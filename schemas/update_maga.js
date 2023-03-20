import Joi from "joi";

const schema = Joi.object({

    title: Joi
        .string()
        .min(4)
        .max(30)
        .message({
            'string.min': 'The title must be at least 4 characters long',
            'string.max': 'The title must be 30 characters long max',
        }),

    description: Joi
    .string()
    .min(8)
    .max(300)
    .messages({
        'string.min': 'The Description must be at least 8 characters long',
        'string.max': 'The Description must be 30 characters long max',
    }),

    cover_photo: Joi
        .string()
        .min(8)
        .uri()
        .messages({
            'string.min': 'The photo must be at least 8 characters',
            'string.uri': 'A valid URL is necessary'
    }),

})

export default schema