import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { Pedido } from '../Pedido';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {

  pedido: Pedido = new Pedido();

  private restauranteService = inject(RestaurantService);
  sendPedido(form: NgForm) {
    if (form.valid) {
      
      this.pedido.number = this.restauranteService.getRandom(1,100)
      this.pedido.date = new Date();
      //this.programadorService.addPush(this.prog)
      //this.enviadoEmit.emit(this.prog);
      //this.pedido = new Pedido();
      //this.habilidadSeleccionada = '';
      this.restauranteService.addPedido(this.pedido);
      this.pedido = new Pedido();
      console.log(this.pedido);
    }
  }

}
