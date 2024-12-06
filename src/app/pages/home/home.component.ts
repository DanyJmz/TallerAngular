import { Component, NgModule } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { FormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [CardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   
  email:string='';
  password:string='';  

  login(user:string, password:string)  {
    console.log(`user: ${user}, password: ${password}`);
  }
}


