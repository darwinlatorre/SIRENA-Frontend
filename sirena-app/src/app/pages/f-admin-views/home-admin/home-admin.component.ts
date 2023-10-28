import { Component } from '@angular/core';
import { Card } from 'src/app/models/card.model';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {

  //Variables
    
  reserve_card: Card = {
    title: "IA",
    p_section: ["Programa: ","Coordinador:","Salon:","Fecha de solicitud:"],
    span_section: ['Fisica', 'Carreño',"201","08/02/2021"],
  };
  
}
