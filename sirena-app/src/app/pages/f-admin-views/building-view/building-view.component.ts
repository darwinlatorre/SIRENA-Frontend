import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-building-view',
  templateUrl: './building-view.component.html',
  styleUrls: ['./building-view.component.css']
})
export class BuildingViewComponent {


    // Inyecta el Router en el constructor
    constructor(private router: Router) { }

    // Método para manejar la navegación
    navigateToCreateBooking() {
      this.router.navigate(['/admin/building/create']);
    }

}
