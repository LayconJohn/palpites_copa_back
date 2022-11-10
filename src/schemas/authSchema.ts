import joi from "joi";

const cadastroSchema = joi.object({
    usuario: joi.string().min(1).required(),
    email: joi.string().email().required(),
    senha: joi.string().min(4).required(),
    confirmarSenha: joi.ref("senha")
})

const loginSchema = joi.object({
    email: joi.string().email().required(),
    senha: joi.string().min(4).required()
})

export {cadastroSchema, loginSchema};