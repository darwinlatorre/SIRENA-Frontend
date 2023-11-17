import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router
import { Facultie } from 'src/app/models/facultie.model';
import { Table } from 'src/app/models/table.model';

@Component({
  selector: 'app-faculties-view',
  templateUrl: './faculties-view.component.html',
  styleUrls: ['./faculties-view.component.css']
})
export class FacultiesViewComponent {

  route: string = "faculty_view";
  faculties: Facultie[] = [];

  table_faculty: Table = {
    title: ["ID", "Nombre"],
    li_content: []
  };
  
    // Inyecta el Router en el constructor
    constructor(private http: HttpClient , private router: Router) { }

    ngOnInit() {
      this.fetchFaculties();
    }

    
    fetchFaculties() {
      const token = localStorage.getItem('jwt'); // Suponiendo que se use autenticación JWT
      if (!token) {
        console.error('No token found!');
        return;
      }
  
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
      this.http.get<Facultie[]>('/api/v1/faculty', { headers: headers })
        .subscribe({
          next: (data) => {
            console.log('Buildings data received:', data);
            // Asigna los datos de las aulas a la propiedad `li_content` del modelo
            this.faculties = data;
            this.table_faculty.li_content = this.faculties.map(faculty => [
              faculty.id.toString(),
              faculty.name
            ]);
          },
          error: (err) => {
            console.error('Error fetching classrooms:', err);
          }
        });
    }

    // Método para manejar la navegación
    navigateToCreateBooking() {
      this.router.navigate(['/admin/faculties/create']);
    }

}
