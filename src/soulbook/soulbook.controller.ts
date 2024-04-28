import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SoulbookService } from './soulbook.service';
import { Soulbook } from './schemas/soulbook.schema';
import { CreateSoulbookDto } from './dto/create-soulbook.dto';
import { UpdateSoulbookDto } from './dto/update-soulbook.dto';

@Controller('soulbooks')
export class SoulbookController {
    constructor (private soulbookService: SoulbookService) {}

    @Get()
    async getAllSoulbooks(): Promise <Soulbook[]> {
        return this.soulbookService.findAll();
    }

    @Post()
    async createSoulbook(
        @Body()
        soulbook: CreateSoulbookDto,
    ): Promise <Soulbook> {
        return this.soulbookService.create(soulbook);
    }

    @Get(':id')
    async getSoulbook(
        @Param('id')
        id: string,
    ): Promise <Soulbook> {
        return this.soulbookService.findById(id);
    }

    @Put(':id')
    async updateSoulbook(
        @Param('id')
        id: string,
        @Body()
        soulbook: UpdateSoulbookDto,
    ): Promise <Soulbook> {
        return this.soulbookService.updateById(id, soulbook);
    }

    @Delete(':id')
    async deleteSoulbook(
        @Param('id')
        id: string,
    ): Promise <Soulbook> {
        return this.soulbookService.deleteById(id);
    }
}
