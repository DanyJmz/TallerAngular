import { Component, Input, input } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { link } from 'node:fs';

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  infoTigre(){
    alert("Info tigre");
  }
  infoGallo(){
    alert("Info gallo");
  } 
  goProducts(){
    window.location.href = "/products"
  }
}


