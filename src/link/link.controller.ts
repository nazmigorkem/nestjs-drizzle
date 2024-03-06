import { Body, Controller, Post } from '@nestjs/common';
import { CreateLinkDTO } from './dto/CreateLinkDTO.js';
import { LinkService } from './link.service.js';

@Controller('link')
export class LinkController {
    constructor(private linkService: LinkService) {}

    @Post()
    async createLink(@Body() newLink: CreateLinkDTO) {
        return await this.linkService.createLink(newLink);
    }
}
