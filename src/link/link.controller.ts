import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
} from '@nestjs/common';
import { CreateLinkDTO } from './dto/CreateLinkDTO.js';
import { UpdateLinkDTO } from './dto/UpdateLinkDTO.js';
import { LinkService } from './link.service.js';

@Controller('link')
export class LinkController {
    constructor(private linkService: LinkService) {}

    @Post('/')
    async createLink(@Body() newLink: CreateLinkDTO) {
        return await this.linkService.createLink(newLink);
    }

    @Get('/:linkID')
    async getLink(@Param('linkID', ParseUUIDPipe) linkID: string) {
        return await this.linkService.getLink(linkID);
    }

    @Delete('/:linkID')
    async deleteLink(@Param('linkID', ParseUUIDPipe) linkID: string) {
        return await this.linkService.deleteLink(linkID);
    }

    @Patch('/:linkID')
    async updateLink(
        @Param('linkID', ParseUUIDPipe) linkID: string,
        @Body() newLink: UpdateLinkDTO,
    ) {
        return await this.linkService.updateLink(linkID, newLink);
    }

    @Post('/use/:linkID')
    async useLink(@Param('linkID', ParseUUIDPipe) linkID: string) {
        return await this.linkService.useLink(linkID);
    }

    @Get('/use/:linkID')
    async getAllLinkUsages(@Param('linkID', ParseUUIDPipe) linkID: string) {
        return await this.linkService.getAllLinkUsages(linkID);
    }
}
