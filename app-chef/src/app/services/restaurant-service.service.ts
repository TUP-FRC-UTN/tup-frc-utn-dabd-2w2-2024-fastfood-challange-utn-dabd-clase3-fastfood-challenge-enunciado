import { Injectable } from '@angular/core';
import { order } from '../classes/order';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  constructor() {
   }
   private orderList : order[] = [];

   addOrder(order : order) {
    this.orderList.push(order)
   }

   getUncompletedOrder() {
    return this.orderList.filter(obj => obj.done === false);
   }

   getCompletedOrder() {
    return this.orderList.filter(obj => obj.done === true);
   }

   updateOrder(order : order) {
    this.orderList.splice(this.orderList.indexOf(order),1);
   }

   removeOrder(index:number) {
    this.orderList.splice(index,1);
   }
}
