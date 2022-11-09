import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { inserirUsuario } from '../repositories/authRepositories';

async function registrarUsuario(req: Request, res: Response) {
    const { usuario, email, senha, confirmarSenha }: {usuario: String, email: String, senha: String, confirmarSenha: String} = req.body;

    if (senha !== confirmarSenha) {
        return res.status(400).send("Os campos de senha devem ser iguais!")
    }

    try {
        await inserirUsuario(usuario, email, senha)

        return res.status(201).send("Usuário cadastrado!");
    } catch (error) {
        console.error(error);
        return res.sendStatus(500)
    }

}

export {registrarUsuario};