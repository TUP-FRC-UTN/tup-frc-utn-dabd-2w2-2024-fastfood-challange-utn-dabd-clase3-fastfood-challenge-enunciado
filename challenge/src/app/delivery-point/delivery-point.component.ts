import { Component, inject,OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Pedido } from '../Pedido';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {

  private service = inject(RestaurantService);
  
  pedidosEntregar : Pedido[] = [];

  ngOnInit(){
    this.cargarPedidos();
  }

  cargarPedidos(){
    this.pedidosEntregar = this.service.getPedidosAEntregar();
  }
}
