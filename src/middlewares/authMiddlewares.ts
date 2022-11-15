import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { verificarUsuario, verificarSessao, verificarUsuarioPeloId } from '../repositories/authRepositories.js';
import { User } from "src/protocols/authProtocol.js";
import { responseEncoding } from "axios";

const checarSenha = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
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

const verificarToken = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    try {
        const usuario = await verificarSessao(token);
        if (!usuario) {
            return res.sendStatus(401);
        }
        if (usuario.active === false) {
            return res.sendStatus(403);
        }
        res.locals.userId = usuario.userId;
        next();
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};

const verificarUserId = async (req: Request, res: Response, next: NextFunction) => {
    const userId: number = res.locals.userId;
    const id: number = Number(req.params.userId);

    try {
        const usuario: {id: number, username: string} = await verificarUsuarioPeloId(id);
        if (usuario.id !== userId) {
            return res.sendStatus(403);
        }
        if (!usuario.username) {
            return res.sendStatus(401);
        }
        next();
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

export {checarSenha, verificarToken, verificarUserId};