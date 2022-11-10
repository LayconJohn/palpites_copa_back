import { connection } from "../database/postgres.js";

async function verificarJogo(gameId: number) {
    try {
        const jogo: {
            id: number,
            homePlayer: string,
            visitorPlayer: string,
            finished: boolean,
            homeResult: number,
            visitorReult: number,
            createAt: string | Date 
        } = (await connection.query('SELECT * FROM games WHERE id = $1', [gameId])).rows[0];
        return jogo;
    } catch (error) {
        console.error(error);
        return;
    }
};

export {verificarJogo};