import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crud-booking-teacher',
  templateUrl: './crud-booking-teacher.component.html',
  styleUrls: ['./crud-booking-teacher.component.css']
})
export class CrudBookingTeacherComponent {
  
  
  constructor(private http: HttpClient, private router: Router) {}
  
  role_nav: string = 'teacher';
  private headers!: HttpHeaders; // Variable para los headers
  public classroom: any[] = [];
  public incidences: any[]=[];
  public faculty: any[]=[];
  public programs: any[]=[];
  
  
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
  private async loadPrograms(facultyId: number) {
    try {
        const response4 = await this.http.get(`api/v1/statistics/programs/${facultyId}`, { headers: this.headers }).toPromise();
        this.programs = response4 as any[];
        console.log(JSON.stringify(response4) + " programas para la facultad con ID " + facultyId);
    } catch (error) {
        console.error('Hubo un error al cargar los programas para esta facultad', error);
    }
}

async onFacultyChange(event: any) {
    const facultyName = event.target.value;
    const facultyId = event.target.options[event.target.selectedIndex].getAttribute('data-id');
  
    try {
        await this.loadPrograms(parseInt(facultyId, 10));
        console.log('Facultad seleccionada:', facultyName);
    } catch (error) {
        console.error('Hubo un error al cargar los programas para esta facultad', error);
    }
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

    const parteFechaReservaInicio = event.target.querySelector('#fechaReservaInicio').value;
    const parteHoraReservaInicio = event.target.querySelector('#horaReservaInicio').value;
    const rsv_fecha_reserva_inicio = new Date(parteFechaReservaInicio + 'T' + parteHoraReservaInicio + ':00.000Z').toISOString();
    console.log(rsv_fecha_reserva_inicio + " fecha de Inicio de la reserva");

    const parteHoraReservaFin = event.target.querySelector('#horaReservaFin').value;
    const rsv_hora_fin = new Date(parteFechaReservaInicio + 'T' + parteHoraReservaFin + ':00.000Z').toISOString();
    console.log(rsv_hora_fin + " fecha de fin de la reserva");


    const rsv_num_estudiantes = event.target.querySelector('#numEstudiantes').value;
    console.log(rsv_num_estudiantes + " número de estudiantes");

    const rsv_estado = "Pendiente";

    const rsv_detalles = event.target.querySelector('#detalles').value;
    console.log(rsv_detalles + " detalles de la reserva");


    const classroomTypeSelect = form.querySelector('#Salon') as HTMLSelectElement;
    const rsv_cls_id = classroomTypeSelect.selectedOptions[0].getAttribute('data-id');
    console.log(rsv_cls_id + " id del salon");

    const facultyTypeSelect = form.querySelector('#facultad') as HTMLSelectElement;
    const rsv_faculty_id = facultyTypeSelect.selectedOptions[0].getAttribute('data-id');
    console.log(rsv_faculty_id + " facultad");

    const rsv_usr_id = localStorage.getItem("id");
    console.log(rsv_usr_id);

    const programsTypeSelect = form.querySelector('#programa') as HTMLSelectElement;
    const rsv_program_id = programsTypeSelect.selectedOptions[0].getAttribute('data-id');
    console.log(rsv_program_id);

    const classroomData = {
      rsv_fecha_reserva_inicio,
      rsv_hora_fin,
      rsv_num_estudiantes,
      rsv_estado,
      rsv_detalles,
      rsv_cls_id,
      rsv_usr_id,
      rsv_faculty_id,
      rsv_program_id
    };

    console.log('JSON que se enviará:', JSON.stringify(classroomData, null, 2));
    interface MyApiResponse {
      status: number;
      data?: any;  // Asumiendo que tu respuesta tiene algún dato
      // Agrega aquí otras propiedades que esperas en tu respuesta
    }
    
    try {
      const response = await this.http.post('api/v1/bookings', classroomData, {
        headers: this.headers,
        responseType: 'text'  // Esperar una respuesta de texto
      }).toPromise();
    
      alert('Reserva creada exitosamente');
      this.router.navigate(['/user/booking']);
    } catch (e: any) {
      if (e && e.error && typeof e.error === 'string') {
        alert(e.error);
      } else {
        console.log("Error general: " + JSON.stringify(e));
      }
    }
    
    
    
    
    
    


    
  }




}
