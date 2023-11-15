import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-reservation',
  templateUrl: './crud-reservation.component.html',
  styleUrls: ['./crud-reservation.component.css']
})
export class CRUDReservationComponent implements OnInit{
  constructor(private http: HttpClient, private router: Router) {}

  private headers!: HttpHeaders; // Variable para los headers
  public users: any[] = [];
  public classroom: any[]=[];

  ngOnInit(): void {
    this.initializeHeaders();
    this.loadClassroom();
    this.loadUsers();
  }
  private initializeHeaders(): void {
    const token = localStorage.getItem('jwt');
    if (!token) {
      console.error('No token found!');
      return;
    }

    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  private async loadClassroom(){
    try{
      const response2 = await this.http.get('api/v1/classroom', { headers: this.headers }).toPromise();
      this.classroom = response2 as any[];
      console.log(JSON.stringify(response2) + "salones");
    }catch(error){
      console.error("Hubo un error al cargas los salones",error)
    }
  }
  private async loadUsers() {
    try {
      const response3 = await this.http.get('api/v1/user', { headers: this.headers }).toPromise();
      this.users = response3 as any[];
      console.log(JSON.stringify(response3) + "usuarios");
    } catch (error) {
      console.error('Hubo un error al cargar los usuarios', error);
    }

  }

  async registerReservation(event: any){
    console.log("estoy entrando ");
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const parteFechaSolicitud = event.target.querySelector('#fechaSolicitud').value;
    const parteHoraSolicitud = event.target.querySelector('#horaSolicitud').value;
    const fechaSolicitud = new Date(parteFechaSolicitud + 'T' + parteHoraSolicitud + ':00.000Z').toISOString();
    console.log(fechaSolicitud + " fecha de solicitud");

    const parteFechaReservaInicio = event.target.querySelector('#fechaReservaInicio').value;
    const parteHoraReservaInicio = event.target.querySelector('#horaReservaInicio').value;
    const fechaReservaInicio = new Date(parteFechaReservaInicio + 'T' + parteHoraReservaInicio + ':00.000Z').toISOString();
    console.log(fechaReservaInicio + " fecha de Inicio de la reserva");

    const parteFechaReservaFin = event.target.querySelector('#fechaReservaFin').value;
    const parteHoraReservaFin = event.target.querySelector('#horaReservaFin').value;
    const fechaReservaFin = new Date(parteFechaReservaFin + 'T' + parteHoraReservaFin + ':00.000Z').toISOString();
    console.log(fechaReservaFin + " fecha de Inicio de la reserva");

    const numEstudiantes = event.target.querySelector('#numEstudiantes').value;
    console.log(numEstudiantes + " número de estudiantes");

    const estadoReserva = event.target.querySelector('#estadoReserva').value;
    console.log(estadoReserva + " estado de la reserva");

    const detalles = event.target.querySelector('#detalles').value;
    console.log(detalles + " detalles de la reserva");

    const codIncidencia = event.target.querySelector('#codIncidencia').value;
    console.log(codIncidencia + " código de la incidencia");

  }

}
