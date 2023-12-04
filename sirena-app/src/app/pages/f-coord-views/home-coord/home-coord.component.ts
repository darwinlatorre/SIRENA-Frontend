import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
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

  bookings: Booking[] = [];
  
  p_template: string[] = ["Usuario:","Fecha de solicitud:", "Fecha de reserva:", "Estado:"];
  t_template: string = "ID: ";

  v_bool: boolean = false;
  cardsAceptadas: Card[] = [];
  cardsRechazadas: Card[] = [];
  cardsPendientes: Card[] = [];
  vReservasAceptadas: Booking[] = [];
  vReservasRechazadas: Booking[] = [];
  vReservasPendientes: Booking[] = [];

  reserve_card!: Card ;

  constructor(private http: HttpClient) {}

ngOnInit(){
  setTimeout(() => {
    this.v_bool = true;
    }, 100);
this.fetchBookings();
}


  fetchBookings() {
    const token = localStorage.getItem('jwt'); // Suponiendo que se use autenticación JWT
    if (!token) {
      console.error('No token found!');
      return;
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http
      .get<Booking[]>('/api/v1/bookings', { headers: headers })
      .subscribe({
        next: (data) => {
          console.log(data);
          console.log('Bookings data received:', data);
          // Asigna los datos de las aulas a la propiedad `li_content` del modelo
          this.bookings = data;
          this.bookings.map((item)=>{
            if(item.rsv_estado == "Aceptada"){
              this.vReservasAceptadas.push(item);
            }
            if(item.rsv_estado =="Rechazada"){
              this.vReservasRechazadas.push(item);
            }
            if(item.rsv_estado == "Pendiente"){
              this.vReservasPendientes.push(item);
            }
          });

          this.vReservasAceptadas.map(item=>{
            this.cardsAceptadas.push({
              title: this.t_template + item.rsv_id.toString(),
              p_section: this.p_template,
              span_section:[item.rsv_usr.username,item.rsv_fecha_solicitud,item.rsv_fecha_reserva_inicio,item.rsv_estado]
            })
          });
          this.vReservasRechazadas.map(item=>{
            this.cardsRechazadas.push({
              title: this.t_template+ item.rsv_id.toString(),
              p_section: this.p_template,
              span_section:[item.rsv_usr.username,item.rsv_fecha_solicitud,item.rsv_fecha_reserva_inicio,item.rsv_estado]
            })
          });
          this.vReservasPendientes.map(item=>{
            this.cardsPendientes.push({
              title:  this.t_template + item.rsv_id.toString(),
              p_section: this.p_template,
              span_section:[item.rsv_usr.username,item.rsv_fecha_solicitud,item.rsv_fecha_reserva_inicio,item.rsv_estado]
            })
          });
        },
        error: (err) => {
          console.error('Error fetching classrooms:', err);
        },
      });
  }
}
