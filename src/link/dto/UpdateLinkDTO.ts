import { PartialType, PickType } from '@nestjs/mapped-types';
import { CreateLinkDTO } from './CreateLinkDTO.js';

export class UpdateLinkDTO extends PartialType(
    PickType(CreateLinkDTO, ['author', 'description', 'title', 'url']),
) {}
