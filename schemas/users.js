import Joi from "joi"

const schema = Joi.object({
    name:Joi
        .string()
        .required()
        .min(3)
        .max(20),
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
    photo: Joi
        .string()
        .required()
        .min(8)
        .uri()
})

export default schema