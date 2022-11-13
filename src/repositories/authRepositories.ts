import { connection } from "../database/postgres.js";

async function inserirUsuario(usuario: string, email: string, senha: string): Promise<void> {
    try {
        (await connection.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`, [usuario, email, senha]));

        return;
    } catch (error) {
        console.error(error);
        return;
    }

}

async function verificarUsuario(email: string): Promise<{id?: number, email: string, password: string}> {
    try {
        const usuario: {id: number, email: string, password: string} = (await connection.query('SELECT  id,email, password FROM users WHERE email = $1', [email])).rows[0];
        return usuario;
    } catch (error) {
        console.error(error);
        return;
    }
}

async function cadastrarSessao(userId: number, token: string): Promise<string | void> {
    try {
        const resultado: String[] = (await connection.query('INSERT INTO sessions ("userId", token) VALUES ($1, $2)', [userId, token])).rows;
        return token;
    } catch (error) {
        console.error(error);
        return;
    }
}

async function verificarSessao(token: string): Promise<{
    id: number,
    token: string,
    userId: number,
    active: boolean,
    createAt: string | Date
} | void> {
    try {
        const usuario: {
            id: number,
            token: string,
            userId: number,
            active: boolean,
            createAt: string | Date
        } = (await connection.query('SELECT * FROM sessions WHERE token = $1', [token])).rows[0];
        return usuario;
    } catch (error) {
        console.error(error);
        return;
    }
}

export {inserirUsuario, verificarUsuario, cadastrarSessao, verificarSessao};