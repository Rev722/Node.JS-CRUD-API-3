import { Module } from '@nestjs/common';
import { SoulbookController } from './soulbook.controller';
import { SoulbookService } from './soulbook.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SoulbookSchema } from './schemas/soulbook.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Soulbook', schema: SoulbookSchema }])],
  controllers: [SoulbookController],
  providers: [SoulbookService],
})
export class SoulbookModule {}
