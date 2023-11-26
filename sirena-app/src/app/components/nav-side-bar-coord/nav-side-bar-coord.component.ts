import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-side-bar-coord',
  templateUrl: './nav-side-bar-coord.component.html',
  styleUrls: ['./nav-side-bar-coord.component.css']
})
export class NavSideBarCoordComponent {
  constructor(private router: Router) {}
  logout(): void {
    localStorage.clear(); // Limpia el localStorage completamente
    // o puedes usar localStorage.removeItem('tuItem') para borrar un ítem específico
    this.router.navigate(['/login']); // Redirige al usuario a la ruta de login
  }
}
