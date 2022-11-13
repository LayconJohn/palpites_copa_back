import { connection } from "../database/postgres.js";
import {JogoEntity} from "../protocols/jogoProtocol.js";
import {PalpiteEntity} from "../protocols/palpiteProtocol.js"

async function verificarJogo(gameId: number): Promise<JogoEntity> {
    try {
        const jogo: JogoEntity = (await connection.query('SELECT * FROM games WHERE id = $1', [gameId])).rows[0];
        return jogo;
    } catch (error) {
        console.error(error);
        return;
    }
};

async function inserirResultado(homeGuess: number, visitorGuess: number, userId: number): Promise<void> {
    try {
        await connection.query('INSERT INTO results ("homeGuess", "visitorGuess", "userId") VALUES ($1, $2, $3)', [homeGuess, visitorGuess, userId]);
        return;
    } catch (error) {
        console.error(error);
        return;
    }
};

async function inserirPalpite(userId: number, gameId: number, resultId: number): Promise<void> {
    try {
        await connection.query('INSERT INTO "usersGuess" ("userId", "gameId", "resultId") VALUES ($1, $2, $3)', [userId, gameId, resultId]);
        return;
    } catch (error) {
        console.error(error);
        return;
    }
};

async function pegarPalpites(gameId: number): Promise<PalpiteEntity[]> {
    try {
        const palpites: PalpiteEntity[] = (await connection.query(`
        SELECT
                users.username as username,
                "usersGuess".id as id,
                results."homeGuess" as "homeGuess",
                results."visitorGuess" as "visitorGuess",
                games."homePlayer" as "homePlayer",
                games."visitorPlayer" as "visitorPlayer"
            FROM "usersGuess"
            JOIN games ON games.id = "usersGuess"."gameId"
            JOIN results ON results.id = "usersGuess"."resultId"
            JOIN users ON users.id = "usersGuess"."userId"
            WHERE games.id = $1
        ;`, [gameId])).rows;
        return palpites;
    } catch (error) {
        console.error(error);
        return;
    }
}

async function deletarPalpiteResultado(guessId: number): Promise<void> {
    try {
        const guess: {id: number, userId: number, resultId: number, gameId: number} = (await connection.query('SELECT * FROM "usersGuess" WHERE id = $1;', [guessId])).rows[0];
        await connection.query('DELETE FROM "usersGuess" WHERE id = $1', [guessId]);
        await connection.query('DELETE FROM results WHERE id = $1', [guess.resultId]);
        return;
    } catch (error) {
        console.error(error);
        return;
    }
};

async function verificarPalpite(guessId: number) {
    try {
        const guess: {id: number, userId: number, resultId: number, gameId: number} = (await connection.query('SELECT * FROM "usersGuess" WHERE id = $1;', [guessId])).rows[0];
        return guess;
    } catch (error) {
        console.error(error);
        return;
    }
};

async function atulizarDadosPalpite(guessId: number, homeGuess: number, visitorGuess: number): Promise<void> {
    try {
        const guess: {id: number, userId: number, resultId: number, gameId: number} = (await connection.query('SELECT * FROM "usersGuess" WHERE id = $1;', [guessId])).rows[0];
        await connection.query('UPDATE results SET "homeGuess" = $1, "visitorGuess" = $2 WHERE id = $3;', [homeGuess, visitorGuess, guess.resultId]);
        return;
    } catch (error) {
        console.error(error);
        return;
    }
}

export {verificarJogo, inserirResultado, inserirPalpite, pegarPalpites, deletarPalpiteResultado, verificarPalpite, atulizarDadosPalpite};