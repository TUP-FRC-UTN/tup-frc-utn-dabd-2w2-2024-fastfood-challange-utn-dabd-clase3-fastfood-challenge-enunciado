import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { order } from '../classes/order';
import { RestaurantServiceService } from '../services/restaurant-service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['entrada']) {
      this.contador = this.entrada;
    }
  }

  pedido : order = new order();
  pedidoService = inject(RestaurantServiceService);
  @Output() salidaP = new EventEmitter<number>();
  @Input() entrada :number = 0;
  contador:number = 0;

  ordenarPedido() {
    this.pedido.done=false;
    this.pedidoService.addOrder(this.pedido);
    this.salidaP.emit(this.contador);
  }
}
