import {Request, Response} from "express";

import {inserirResultado, inserirPalpite, pegarPalpites, deletarPalpiteResultado, atulizarDadosPalpite} from "../repositories/palpitesRepositories.js"

async function cadastrarResultado(req: Request, res: Response): Promise<Response> {
    const {homeGuess, visitorGuess}: {homeGuess: number, visitorGuess: number} = req.body;
    const userId: number = res.locals.userId

    try {
        await inserirResultado(homeGuess, visitorGuess, userId);
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    } 
}

async function cadastrarPalpite(req: Request, res: Response): Promise<Response> {
    const resultId: number = Number(req.params.resultId);
    const gameId: number = Number(req.params.gameId);
    const userId: number = res.locals.userId;
    try {
        await inserirPalpite(userId, gameId, resultId);
        return res.sendStatus(201);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

async function listarPalpites(req: Request, res: Response): Promise<Response> {
    const gameId: number = res.locals.gameId;

    try {
        const palpites = await pegarPalpites(gameId);
        return res.status(200).send(palpites)
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

async function deletarPalpite(req: Request, res: Response): Promise<Response> {
    const guessId: number = res.locals.guessId;

    try {
        await deletarPalpiteResultado(guessId);
        return res.sendStatus(202);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

async function atualizarPalpite(req: Request, res: Response): Promise<Response> {
    const guessId: number = res.locals.guessId;
    const {homeGuess, visitorGuess}: {homeGuess: number, visitorGuess: number} = req.body;

    try {
        await atulizarDadosPalpite(guessId, homeGuess, visitorGuess);
        return res.sendStatus(204);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

export {cadastrarResultado, cadastrarPalpite, listarPalpites, deletarPalpite, atualizarPalpite};