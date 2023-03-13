import Joi from "joi"

const schema = Joi.object({
    mail: Joi
        .string()
        .required()
        .min(8)
        .email({ minDomainSegments: 2  })
        .messages(
            {
                'string.min': 'The mail must be at least 8 characters',
                'string.empty': 'The mail cannot be empty',
                'any.required': 'A mail is required',
                'string.email': 'A valid mail is necessary'
            }
        ),
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
        )
    
})

export default schema