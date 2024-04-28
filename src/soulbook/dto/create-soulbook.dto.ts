import { Category } from "../schemas/soulbook.schema";



export class CreateSoulbookDto{
    readonly title: string; 
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}