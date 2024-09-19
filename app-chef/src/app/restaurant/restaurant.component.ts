import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { order } from '../classes/order';
import { RestaurantServiceService } from '../services/restaurant-service.service';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['entradaP']){
      this.cargarPedidosDone();
      this.cargarPedidosNotDone();
    }
  }
  pedidosDone:order[] = [];
  pedidosNotDone:order[] = [];
  pedidoService = inject(RestaurantServiceService)
  order : order | any;

  @Output() salida = new EventEmitter<number>();
  @Input() entrada = 0;

  cargarPedidosDone() {
    this.pedidosDone = this.pedidoService.getCompletedOrder();
  }

  cargarPedidosNotDone() {
    this.pedidosNotDone = this.pedidoService.getUncompletedOrder();
  }

  entregarPedido(index:number) {
    this.pedidoService.removeOrder(index);
    this.cargarPedidosDone();
  }

}
