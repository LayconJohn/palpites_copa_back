import pg from 'pg';
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const databaseConfig: {connectionString: string} = {
    connectionString: process.env.DATABASE_URL
}

const connection = new Pool(databaseConfig);

export {connection};