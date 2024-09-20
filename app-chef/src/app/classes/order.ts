export class order{
    number: number; // Numero de pedido random de 1 a 1000
    name: string;  // Nombre del cliente
    description: string;  // Descripción del pedido
    date: Date ; // Fecha de creación del pedido
    done?:boolean;

    constructor() {
        this.number= Math.floor(Math.random() * (999 - 0 + 1) + 0);
        this.name= "";
        this.description="";
        this.date=new Date();
    }
}