import {Category} from './category';

export class product{
    productId:string;
    name:string;
    shortDescription:string;
    longDescription:string;
    price:number;
    imageUrl:string; 
    imageThumbnailUrl:string; 
    isDiscountedProduct:boolean;
    categoryId:string;
}