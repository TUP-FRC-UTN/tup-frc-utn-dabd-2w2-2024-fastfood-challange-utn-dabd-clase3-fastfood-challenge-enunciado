import { Component, inject ,OnInit,Pipe} from '@angular/core';
import { PosComponent } from "../pos/pos.component";
import { KitchenComponent } from "../kitchen/kitchen.component";
import { DeliveryPointComponent } from "../delivery-point/delivery-point.component";
import { RestaurantService } from '../restaurant.service';
import { Pedido } from '../Pedido';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PosComponent, KitchenComponent, DeliveryPointComponent,FormsModule,CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

  private restaurantService = inject(RestaurantService);

  listaPedidos : Pedido[] = [];
  
  ngOnInit(){
    this.getPedidos();
  }

  getPedidos(): void {
    this.listaPedidos = this.restaurantService.getPedidos();    
  }

}
