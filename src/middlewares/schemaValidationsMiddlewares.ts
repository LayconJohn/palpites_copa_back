import { cadastroSchema, loginSchema } from "../schemas/authSchema.js";
import { Request, Response } from "express";

const validaCadastroSchema = (req: Request, res: Response, next) => {
    const { usuario, email, senha, confirmarSenha }: {usuario: String, email: String, senha: String, confirmarSenha: String} = req.body;

    const validacao = cadastroSchema.validate({usuario, email, senha, confirmarSenha}, {abortEarly: false});
    if (validacao.error) {
        const erros: string[]= validacao.error.details.map(detail => detail.message);
        return res.status(422).send(erros)
    }

    next();
};


const validaLoginSchema = (req: Request, res: Response, next) => {
    const {email, senha}: {email: String, senha: String} = req.body;

    const validacao = loginSchema.validate({email, senha}, {abortEarly: false});
    if (validacao.error) {
        const erros: string[]= validacao.error.details.map(detail => detail.message);
        return res.status(422).send(erros)
    }

    next();
}

export {validaCadastroSchema, validaLoginSchema};