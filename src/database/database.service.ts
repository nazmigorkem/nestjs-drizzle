import { LinkUsages, Links } from '#link/schemas/link.schema.js';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

@Injectable()
export class DatabaseService {
    private queryClient: ReturnType<typeof postgres>;
    database: ReturnType<typeof drizzle<{ links: typeof Links }>>;
    constructor(private configService: ConfigService) {
        this.queryClient = postgres(this.configService.get('DATABASE_URL'));
        this.database = drizzle(this.queryClient, {
            schema: {
                links: Links,
                linkUsages: LinkUsages,
            },
            logger: true,
        });
        Logger.log('DatabaseService initialized.');
    }
}
