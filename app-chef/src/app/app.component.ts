import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PosComponent } from "./pos/pos.component";
import { DeliveryComponent } from "./delivery/delivery.component";
import { KitchenComponent } from "./kitchen/kitchen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RestaurantComponent, PosComponent, DeliveryComponent, KitchenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-chef';
  contador:number = 0;

  aumentarContador() {
    this.contador++;
  }
}
