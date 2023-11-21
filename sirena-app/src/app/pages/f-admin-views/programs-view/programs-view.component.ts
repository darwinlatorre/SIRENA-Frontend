import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router
import { Building } from 'src/app/models/building.model';
import { Table } from 'src/app/models/table.model';

@Component({
  selector: 'app-programs-view',
  templateUrl: './programs-view.component.html',
  styleUrls: ['./programs-view.component.css']
})
export class ProgramsViewComponent {

      // Inyecta el Router en el constructor
      constructor(private http: HttpClient, private router: Router) { }
      
      // Método para manejar la navegación
      navigateToCreatePrograms() {
        this.router.navigate(['/admin/programs/create']);
      }

}
