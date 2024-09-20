import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RestaurantServiceService } from '../services/restaurant-service.service';
import { order } from '../classes/order';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['entrada']) {
      this.traerPedidos();
    }
  }
  pedidosService = inject(RestaurantServiceService);

  pendingOrders : order[] = [];
  currentOrder:order | undefined = undefined;
  ableToStart:boolean=true;

  @Output() salida = new EventEmitter<number>();
  @Input() entrada : number = 0;
  contador : number = 0;

  traerPedidos() {
    this.pendingOrders=this.pedidosService.getUncompletedOrder();
  }

  enviarPedido() {
    if(this.currentOrder != undefined){
      this.currentOrder.done = true;
      this.pedidosService.updateOrder(this.currentOrder);
      this.ableToStart=true;
      this.currentOrder=undefined;
      this.salida.emit(this.contador);
    }
  }

  comenzarCoccion(index:number) {
    this.ableToStart=false;
    this.currentOrder=this.pendingOrders.at(index);
    this.pendingOrders.splice(index,1);
  }

  showOrder(order:order):string {
    return "("+order.number+") - " + order.description;
  }
}
