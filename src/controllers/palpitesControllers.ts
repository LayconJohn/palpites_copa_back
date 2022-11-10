import {Request, Response} from "express";


function cadastrarPalpite(req: Request, res: Response) {
    const {homeGuess, visitorGuess}: {homeGuess: string, visitorGuess: string} = req.body;
    //const {token} = req.headers;
    const {gameId} = req.params;

    res.sendStatus(201);
}

export {cadastrarPalpite};