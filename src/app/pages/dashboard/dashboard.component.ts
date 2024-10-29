import { Component } from '@angular/core';
import { Roles, Usuario } from '../../models/test';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  roles:Roles = {
    rol:'Admin'
  }
  
  usuarios:Usuario[] = [
    {
      id:1,
      name:"Daniel Jimenez",
      description:"Cliente de la app",
      rol:{rol:'Cliente'}
    },
    {
      id:2,
      name:"Ariel Camacho",
      description:"Administrador de la app",
      rol:{rol:'Admin'}
    },
    {
      id:2,
      name:"Tyler Durden",
      description:"Vendedor de la app",
      rol:{rol:'Vendedor'}
    },
  ];
}
