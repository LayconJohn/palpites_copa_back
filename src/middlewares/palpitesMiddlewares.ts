import { Request, Response, NextFunction } from "express";

import { verificarJogo, verificarPalpite } from "../repositories/palpitesRepositories.js"; //src/repositories/palpitesRepositories.js

const validarJogo = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const gameId: number = Number(req.params.gameId);
    if (!gameId) {
        return res.sendStatus(400);
    }

    try {
        const jogo = verificarJogo(gameId);
        if (!jogo) {
            return res.status(400).send("O jogo não existe!");
        }
        res.locals.gameId = gameId;
        next();
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};

const validarPalpite = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const guessId: number = Number(req.params.guessId);
    try {
        const palpite = await verificarPalpite(guessId)
        if (!palpite) {
            return res.sendStatus(404);
        }
        res.locals.guessId = guessId;
        next()
    } catch (error) {
        
    }
}

export {validarJogo, validarPalpite};