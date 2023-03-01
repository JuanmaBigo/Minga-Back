import Joi from "joi"

const schema = Joi.object({
    email: Joi
        .string()
        .required()
        .min(8)
        .email({ minDomainSegments: 2  }),
    password: Joi
        .string()
        .required()
        .min(8)
        .max(50),
    
})

export default schema