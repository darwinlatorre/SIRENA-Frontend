import { Component } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home-coord',
  templateUrl: './home-coord.component.html',
  styleUrls: ['./home-coord.component.css']
})
export class HomeCoordComponent {
  role_nav: string = 'coordinator';

  //Seguramente debes hacer un array con todos las reservas para iterarlas

  //Un ejemplo de como se debe usar los modelos de las cards, con el fetch setearlas

  reserve_card: Card = {
    title: "IA",
    p_section: ["Programa: ","Coordinador:","Salon:","Fecha de solicitud:"],
    span_section: ['Fisica', 'Carreño',"201","08/02/2021"],
  };
}
