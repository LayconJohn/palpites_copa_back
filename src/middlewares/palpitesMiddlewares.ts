import { Request, Response } from "express";

import { verificarJogo } from "src/repositories/palpitesRepositories.js";

const validarJogo = async (req: Request, res: Response, next) => {
    const gameId: number = Number(req.params.gameId);
    try {
        const jogo = verificarJogo(gameId);
        if (!jogo) {
            return res.status(400).send("O jogo não existe!");
        }

        next();
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};

export {validarJogo};