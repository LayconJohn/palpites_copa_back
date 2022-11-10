import { Request, Response } from 'express';
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

import { inserirUsuario, cadastrarSessao } from '../repositories/authRepositories.js';

async function registrarUsuario(req: Request, res: Response) {
    const { usuario, email, senha, confirmarSenha }: {usuario: String, email: String, senha: string, confirmarSenha: String} = req.body;

    if (senha !== confirmarSenha) {
        return res.status(400).send("Os campos de senha devem ser iguais!")
    }

    const senhaEncriptografada: String = bcrypt.hashSync(senha, 10); 

    try {
        await inserirUsuario(usuario, email, senhaEncriptografada);

        return res.status(201).send("Usuário cadastrado!");
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }

}

async function loginUsuario(req: Request, res: Response) {
    const usuario: {id: number, email: string, password: string} = res.locals.usuario;
    const token: string = uuid();

    try {
        await cadastrarSessao(usuario.id, token);
        return res.status(200).send({token})
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

export {registrarUsuario, loginUsuario};