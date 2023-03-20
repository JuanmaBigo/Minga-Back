import Joi from "joi-oid"
import objectId from 'joi-objectid';
Joi.objectId = objectId(Joi);

const schema = Joi.object({
    name: Joi
        .string()
        .min(2)
        .max(30)
        .messages({
            'string.min': 'The title must be at least 2 characters long',
            'string.max': 'The title must be 30 characters long max',
            'string.empty': 'A title is required',
            'any.required': 'A title is required'
        }),
    last_name: Joi
        .string()
        .min(2)
        .max(30)
        .messages({
            'string.min': 'The title must be at least 2 characters long',
            'string.max': 'The title must be 30 characters long max',
            'string.empty': 'A title is required',
            'any.required': 'A title is required'
        }),
    city: Joi
        .string()
        .min(5)
        .max(30)
        .messages({
            'string.min': 'The title must be at least 5 characters long',
            'string.max': 'The title must be 30 characters long max',
            'string.empty': 'A title is required',
            'any.required': 'A title is required'
        }),
    country: Joi
        .string()
        .min(5)
        .max(30)
        .messages({
            'string.min': 'The title must be at least 5 characters long',
            'string.max': 'The title must be 30 characters long max',
            'string.empty': 'A title is required',
            'any.required': 'A title is required'
        }),
    date: Joi
        .date()
        .raw()
        ,
    photo: Joi
        .string() 
        .uri()
        .messages(
            {
                'string.empty': 'The photo field cannot be empty',
                'any.required': 'A photo is required',
                'string.uri': 'A valid URL is necessary for the cover photo'
            }),
    user_id: Joi
        .objectId()
        .messages({
            'invalid': 'user_id is not an objectId'
        }),
        active:Joi.boolean()
})

export default schema