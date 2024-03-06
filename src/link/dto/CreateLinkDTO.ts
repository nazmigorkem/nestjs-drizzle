import { IsString, IsUUID } from 'class-validator';

export class CreateLinkDTO {
    @IsUUID()
    userID: string;

    @IsUUID()
    teamsID: string;

    @IsString()
    url: string;

    @IsString()
    description: string;

    @IsString()
    author: string;

    @IsString()
    title: string;
}
