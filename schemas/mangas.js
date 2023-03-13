import Joi from "joi";
import objectId from 'joi-objectid';
Joi.objectId = objectId(Joi);

const schema = Joi.object({
    author_id:Joi
        .objectId()
        .required()
        .messages({
            'invalid': 'author_id is not an objectId'
        }),
    company_id:Joi
        .objectId()
        .messages({
            'invalid': 'company_id is not an objectId'
        }),
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
    cover_photo: Joi
        .string()
        .required()
        .min(8)
        .uri()
        .messages(
            {
                'string.min': 'The photo must be at least 8 characters',
                'string.empty': 'The photo cannot be empty',
                'any.required': 'A photo is required',
                'string.uri': 'A valid URL is necessary'
            }
        ),
    category_id: Joi
        .objectId()
        .required()
        .messages({
            'invalid': 'category_id is not an objectId'
        }),

})


export default schema