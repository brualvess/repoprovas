import joi from 'joi';
export const schemaSignup = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref('password')
});
export const schemaSignin = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});
