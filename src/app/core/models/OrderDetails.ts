import { Order } from './order';
import { product } from './product';

export class OrderDetails{
    orderDetailId:string;
    orderId:string;
    order:Order;
    productId:string;
    product:product;
    amount:number;
    price:number;
    productName:string;
}