import { Component, inject } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Pedido, PedidoIngreso } from '../Pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  private service = inject(RestaurantService);
  
  pedidosxCocinar : Pedido[] = [];

  pedidosCocinados : Pedido[] = [];

  ngOnInit(){
    this.getPedidosxCocinar();
    this.getPedidosCocinados()  
    
  }

  getPedidosxCocinar(){
    this.pedidosxCocinar = this.service.getPedidosxCocinar();
  }

  getPedidosCocinados(){
    this.pedidosCocinados = this.service.getPedidosCocinados();
  }

  cocinarPedido(ped : Pedido){
    const index  = this.pedidosxCocinar.indexOf(ped);
    this.service.cocinarPedido(ped,index);
    this.getPedidosxCocinar();
    this.getPedidosCocinados();
  }

  terminarPedido(){
    const pedido = this.pedidosCocinados.pop();

    this.service.terminarPedido(pedido!);
  }

}
