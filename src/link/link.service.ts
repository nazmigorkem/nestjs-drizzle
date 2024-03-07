import { DatabaseService } from '#database/database.service.js';
import { Injectable } from '@nestjs/common';
import { count, eq } from 'drizzle-orm';
import { CreateLinkDTO } from './dto/CreateLinkDTO.js';
import { UpdateLinkDTO } from './dto/UpdateLinkDTO.js';
import { LinkUsages, Links } from './schemas/link.schema.js';

@Injectable()
export class LinkService {
    constructor(private databaseService: DatabaseService) {}

    async createLink(newLink: CreateLinkDTO) {
        return (
            await this.databaseService.database
                .insert(Links)
                .values(newLink)
                .returning({ linkID: Links.id })
        )[0];
    }

    async getLink(linkID: string) {
        return await this.databaseService.database.query.links.findFirst({
            where: eq(Links.id, linkID),
        });
    }

    async deleteLink(linkID: string) {
        return await this.databaseService.database
            .delete(Links)
            .where(eq(Links.id, linkID));
    }

    async updateLink(linkID: string, newLink: UpdateLinkDTO) {
        return await this.databaseService.database
            .update(Links)
            .set(newLink)
            .where(eq(Links.id, linkID));
    }

    async useLink(linkID: string) {
        const link = await this.databaseService.database.query.links.findFirst({
            where: eq(Links.id, linkID),
            columns: {
                userID: true,
                id: true,
            },
        });

        if (link === undefined) {
            return;
        }

        return (
            await this.databaseService.database
                .insert(LinkUsages)
                .values({
                    linkID: link.id,
                    userID: link.userID,
                })
                .returning({ linkUsageID: LinkUsages.id })
        )[0];
    }

    async getAllLinkUsages(linkID: string) {
        return await this.databaseService.database
            .select({
                linkID: LinkUsages.linkID,
                count: count(LinkUsages.linkID),
            })
            .from(LinkUsages)
            .leftJoin(Links, eq(LinkUsages.linkID, Links.id))
            .where(eq(Links.id, linkID))
            .groupBy(LinkUsages.linkID);
    }
}
