import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Soulbook } from './schemas/soulbook.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class SoulbookService {
    constructor(
        @InjectModel(Soulbook.name)
        private soulbookModel: mongoose.Model<Soulbook>
    ) {}

    async findAll(): Promise<Soulbook[]> {
        const soulbooks = await this.soulbookModel.find();
        return soulbooks;
    }

    async create(soulbook: Soulbook): Promise <Soulbook> {
        const res = await this.soulbookModel.create(soulbook);
        return res;
    }

    async findById(id: string): Promise <Soulbook> {
        const soulbook = await this.soulbookModel.findById(id);

        if (!soulbook) {
            throw new NotFoundException('KISHIN VANISHED!');
        }
        return soulbook;
    }

    async updateById(id: string, soulbook: Soulbook): Promise <Soulbook> {
            return await this.soulbookModel.findByIdAndUpdate(id, soulbook, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise <Soulbook> {
        return await this.soulbookModel.findByIdAndDelete(id);
    }
}
