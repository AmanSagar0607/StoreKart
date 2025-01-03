// import { drizzle } from 'drizzle-orm/neon-http';

// const db = drizzle(process.env.NEXT_PUBLIC_DATABASE_URL);


import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set in environment variables');
}

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql, { schema });

export { db };