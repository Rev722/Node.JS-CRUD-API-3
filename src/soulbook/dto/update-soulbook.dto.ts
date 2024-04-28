import { Category } from "../schemas/soulbook.schema";



export class UpdateSoulbookDto{
    readonly title: string; 
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}