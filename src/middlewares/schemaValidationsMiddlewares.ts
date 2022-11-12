import { Request, Response, NextFunction } from "express";

import { AuthEntity } from "../protocols/authProtocol.js"; //src/protocols/authProtocol.js
import { cadastroSchema, loginSchema } from "../schemas/authSchema.js";

const validaCadastroSchema = (req: Request, res: Response, next: NextFunction) => {
    const { usuario, email, senha, confirmarSenha } = req.body as AuthEntity;

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