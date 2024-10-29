import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { Productos } from '../../models/test';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productos:Productos[] = [
    {
      name:'Producto 1',
      description:'Descripcion del producto 1',
      price:0.0,
      img:'/img/producto1.png',
    },
    {
      name:'Producto 2',
      description:'Descripcion del producto 2',
      price:0.0,
      img:'/img/producto2.png',
    },
    {
      name:'Producto 3',
      description:'Descripcion del producto 3',
      price:0.0,
      img:'/img/producto3.png',
    }, 
  ];
}
