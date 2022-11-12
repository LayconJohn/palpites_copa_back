import pg from 'pg';

const { Pool } = pg;

const databaseConfig: {connectionString: string} = {
    connectionString: process.env.DATABASE_URL
}

const connection = new Pool(databaseConfig);

export {connection};