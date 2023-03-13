import Joi from "joi"

const schema = Joi.object({
    name:Joi
        .string()
        .required()
        .min(3)
        .messages({
            'string.min':'The password must be at least 3 characteres',
            'string.empty':'The name cannot be empty',
            'any.required': 'A name is required'
        }),
    mail: Joi
        .string()
        .required()
        .min(8)
        .email({ minDomainSegments: 2  })
        .messages({
            'string.min':'The password must be at least 3 characteres',
            'string.empty':'The name cannot be empty',
            'any.required': 'Aname is required',
            'string.email' : 'A valid email is necessary'
        }),
    password: Joi
        .string()
        .required()
        .min(8)
        .max(50)
        .messages(
            {
                'string.min': 'The password must be at least 8 characters',
                'string.max': 'The password cannot exceed 50 characters',
                'string.empty': 'The password cannot be empty',
                'any.required': 'A password is required',
            }
        ),
    photo: Joi
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
        )
})

export default schema