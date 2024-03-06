import { Links } from '#link/schemas/link.schema.js';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

@Injectable()
export class DatabaseService {
    queryClient: ReturnType<typeof postgres>;
    database: ReturnType<typeof drizzle>;
    constructor(private configService: ConfigService) {
        this.queryClient = postgres(this.configService.get('DATABASE_URL'));
        this.database = drizzle(this.queryClient, {
            schema: {
                links: Links,
            },
        });
        Logger.log('DatabaseService initialized.');
    }
}
