import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RestaurantServiceService } from '../services/restaurant-service.service';
import { order } from '../classes/order';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['entrada']) {
      this.recibirOrdenes();
    }
  }

  orderService = inject(RestaurantServiceService);
  ordersToDelivered:order[] = [];
  @Output() salida = new EventEmitter<number>();
  @Input() entrada = 0;
  contador:number = 0;

  recibirOrdenes() {
    this.ordersToDelivered=this.orderService.getCompletedOrder();
  }

  entregarOrden(index:number) {
    this.orderService.removeOrder(index);
    this.recibirOrdenes;
  }
}
