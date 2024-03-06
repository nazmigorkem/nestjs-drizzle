import { DatabaseService } from '#database/database.service.js';
import { Module } from '@nestjs/common';
import { LinkController } from './link.controller.js';
import { LinkService } from './link.service.js';

@Module({
    providers: [LinkService, DatabaseService],
    controllers: [LinkController],
})
export class LinkModule {}
