import { Injectable } from '@angular/core';
import {Pedido,PedidoIngreso} from './Pedido';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  private listaPedidos : Pedido[] = []

  private pedidosxCocinar : Pedido [] = [];
  private pedidosCocinados : Pedido [] = [];
  private pedidosxEntregar : Pedido[] = [];


  getRandom(min : number, max : number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getPedidos(){
    return this.listaPedidos;
  }
  getPedidosxCocinar(){
    return this.pedidosxCocinar;
  }
  getPedidosCocinados(){
    return this.pedidosCocinados;
  }

  getPedidosAEntregar(){
    return this.pedidosxEntregar;
  }

  addPedido(pedido : Pedido){
    this.listaPedidos.push(pedido);
    this.pedidosxCocinar.push(pedido);
  }

  cocinarPedido(pedido : Pedido, index : number){
    this.pedidosCocinados.push(pedido)
    this.pedidosxCocinar.splice(index,1);
    
  }

  terminarPedido(pedido : Pedido ){
    this.pedidosxEntregar.push(pedido)
  }

  entregarPedido( index : number){

    this.pedidosxEntregar.splice(index,1);
    
  }
}
