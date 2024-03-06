import dotenv from 'dotenv';

dotenv.config({
    path: 'env/drizzle.env',
});

import type { Config } from 'drizzle-kit';
export default {
    schema: './src/**/*.schema.ts',
    out: './drizzle',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL as string,
    },
} satisfies Config;
