import { DatabaseService } from '#database/database.service.js';
import { Injectable } from '@nestjs/common';
import { ILinks, Links } from './schemas/link.schema.js';

@Injectable()
export class LinkService {
    constructor(private databaseService: DatabaseService) {}

    async createLink(newLink: Omit<ILinks, 'createdAt' | 'id'>) {
        return (
            await this.databaseService.database
                .insert(Links)
                .values(newLink)
                .returning({ linkID: Links.id })
        )[0];
    }
}
