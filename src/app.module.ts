import { LinkModule } from '#link/link.module.js';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module.js';

@Module({
    imports: [
        DatabaseModule,
        LinkModule,
        ConfigModule.forRoot({
            envFilePath: 'env/dev.env',
            isGlobal: true,
        }),
    ],
})
export class AppModule {}
