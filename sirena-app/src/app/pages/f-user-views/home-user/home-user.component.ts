import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent  {


  constructor(private http: HttpClient, private router: Router) {}
  
  private headers!: HttpHeaders; // Variable para los headers
  public classroom: any[] = [];
  public incidences: any[]=[];
  public faculty: any[]=[];


  ngOnInit(): void {
    this.initializeHeaders();
    this.loadClassroom();
    this.loadIncidence();
    this.loadFaculty();
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
  private async loadClassroom() {
    try {
      const response3 = await this.http.get('api/v1/classroom', { headers: this.headers }).toPromise();
      this.classroom = response3 as any[];
      console.log(JSON.stringify(response3) + "Salones");
    } catch (error) {
      console.error('Hubo un error al cargar los tipos de salón', error);
    }

  }
  private async loadIncidence() {
    try {
      const response2 = await this.http.get('api/v1/incidence', { headers: this.headers }).toPromise();
      this.incidences = response2 as any[];
      console.log(JSON.stringify(response2) + "Incidencias");
    } catch (error) {
      console.error('Hubo un error al cargar las incidencias', error);
    }

  }
  private async loadFaculty() {
    try {
      const response = await this.http.get('api/v1/faculty', { headers: this.headers }).toPromise();
      this.faculty = response as any[];
      console.log(JSON.stringify(response) + " Facultad");
    } catch (error) {
      console.error('Hubo un error al cargar las facultades', error);
    }

  }

  async registerReservation(event: any){

    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const parteFechaSolicitud = event.target.querySelector('#fechaSolicitud').value;
    const parteHoraSolicitud = event.target.querySelector('#horaSolicitud').value;
    const rsv_fecha_solicitud = new Date(parteFechaSolicitud + 'T' + parteHoraSolicitud + ':00.000Z').toISOString();
    console.log(rsv_fecha_solicitud + " fecha de solicitud");

    const parteFechaReservaInicio = event.target.querySelector('#fechaReservaInicio').value;
    const parteHoraReservaInicio = event.target.querySelector('#horaReservaInicio').value;
    const rsv_fecha_reserva_inicio = new Date(parteFechaReservaInicio + 'T' + parteHoraReservaInicio + ':00.000Z').toISOString();
    console.log(rsv_fecha_reserva_inicio + " fecha de Inicio de la reserva");

    const parteFechaReservaFin = event.target.querySelector('#fechaReservaFin').value;
    const parteHoraReservaFin = event.target.querySelector('#horaReservaFin').value;
    const rsv_hora_fin = new Date(parteFechaReservaFin + 'T' + parteHoraReservaFin + ':00.000Z').toISOString();
    console.log(rsv_hora_fin + " fecha de Inicio de la reserva");

    const rsv_num_estudiantes = event.target.querySelector('#numEstudiantes').value;
    console.log(rsv_num_estudiantes + " número de estudiantes");

    const rsv_detalles = event.target.querySelector('#detalles').value;
    console.log(rsv_detalles + " detalles de la reserva");

    const rsv_estado = "Pendiente";

    const incidenceTypeSelect = form.querySelector('#incidencia') as HTMLSelectElement;
    let rsv_incidencia_id = incidenceTypeSelect.selectedOptions[0].getAttribute('data-id');
    console.log(rsv_incidencia_id + " id de la incidencia");

    const classroomTypeSelect = form.querySelector('#Salon') as HTMLSelectElement;
    const rsv_cls_id = classroomTypeSelect.selectedOptions[0].getAttribute('data-id');
    console.log(rsv_cls_id + " id del salon");

    const facultyTypeSelect = form.querySelector('#facultad') as HTMLSelectElement;
    const rsv_faculty_id = facultyTypeSelect.selectedOptions[0].getAttribute('data-id');
    console.log(rsv_faculty_id + " facultad");



    

    const rsv_usr_id = localStorage.getItem("id");
    console.log(rsv_usr_id);
    const rsv_id = 1;


    const classroomData = {
      rsv_id,
      rsv_fecha_solicitud,
      rsv_fecha_reserva_inicio,
      rsv_hora_fin,
      rsv_num_estudiantes,
      rsv_estado,
      rsv_detalles,
      rsv_incidencia_id,
      rsv_cls_id,
      rsv_usr_id,
      rsv_faculty_id
    };

    console.log('JSON que se enviará:', JSON.stringify(classroomData, null, 2));

    try {
      const response = await this.http.post('api/v1/bookings', classroomData, { headers: this.headers }).toPromise();
      console.log(response);
      alert('reserva creado exitosamente');
    } catch (error) {
      console.error('Hubo un error al crear la reserva', error);
      // Aquí podrías manejar diferentes tipos de errores y dar feedback correspondiente.
    }


    
  }



  salir(): void {
    localStorage.clear(); // Limpia el localStorage completamente
    this.router.navigate(['/login']); // Redirige al usuario a la ruta de login
  }


}
