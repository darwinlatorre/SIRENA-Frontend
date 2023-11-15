import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-faculties-view',
  templateUrl: './faculties-view.component.html',
  styleUrls: ['./faculties-view.component.css']
})
export class FacultiesViewComponent {

    // Inyecta el Router en el constructor
    constructor(private router: Router) { }

    // Método para manejar la navegación
    navigateToCreateBooking() {
      this.router.navigate(['/admin/faculties/create']);
    }

}
