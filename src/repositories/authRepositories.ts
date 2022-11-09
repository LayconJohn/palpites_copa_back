import { Request, Response } from "express";
import { connection } from "../database/postgres";

async function inserirUsuario(usuario: String, email: String, senha: String) {
    const resultado = await connection.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`, [usuario, email, senha]);

    return resultado.rows
}

export {inserirUsuario};