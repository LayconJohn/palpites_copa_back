import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { verificarUsuario, verificarSessao } from '../repositories/authRepositories.js';

const checarSenha = async (req: Request, res: Response, next) => {
    const {email, senha}: {email: string, senha: string} = req.body;
    try {
        const usuario: {email: string, password: string} = await verificarUsuario(email);
        const senhaCorreta: boolean = bcrypt.compareSync(senha, usuario.password);
        if (!usuario && senhaCorreta) {
            return res.sendStatus(404);
        }
        res.locals.usuario = usuario;

        next();

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};

const verificarToken = async (req: Request, res: Response, next) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    try {
        const usuario = await verificarSessao(token);
        if (!usuario) {
            return res.sendStatus(401);
        }
        if (usuario.active === false) {
            return res.sendStatus(403);
        }
        next();
    } catch (error) {
        
    }
};

export {checarSenha, verificarToken};