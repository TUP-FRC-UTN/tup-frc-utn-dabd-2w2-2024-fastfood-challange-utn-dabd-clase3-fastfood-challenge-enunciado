import { Component, EventEmitter, inject, OnChanges, Output, SimpleChanges } from '@angular/core';
import { order } from '../classes/order';
import { RestaurantServiceService } from '../services/restaurant-service.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['entrada']) {
      //this.contador = this.entrada;
    }
  }

  pedido : order = new order();
  pedidoService = inject(RestaurantServiceService);
  @Output() salidaP = new EventEmitter<number>();
  //@Input() 
}
