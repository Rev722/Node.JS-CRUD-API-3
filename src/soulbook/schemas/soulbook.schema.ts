import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum Category {
    ANIME = 'SOUL',
    KISHIN = 'HUNTER',
    SOUL = 'RESONANCE',
}

@Schema({
    timestamps: true,
})

export class Soulbook {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;
}

export const SoulbookSchema = SchemaFactory.createForClass(Soulbook)