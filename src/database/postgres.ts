import pg from 'pg';

const { Pool } = pg;

const databaseConfig: {connectionString: String, ssl: {rejectUnauthorized: Boolean}} = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}

//TODO: Tirar no Any
const connection = new Pool(databaseConfig);

export {connection};