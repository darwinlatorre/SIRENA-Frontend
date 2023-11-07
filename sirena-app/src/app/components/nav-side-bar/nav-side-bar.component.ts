import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Componente que representa la barra lateral de navegación de la aplicación.
 */
@Component({
  selector: 'app-nav-side-bar',
  templateUrl: './nav-side-bar.component.html',
  styleUrls: ['./nav-side-bar.component.css']
})
export class NavSideBarComponent {
  /**
   * Constructor del componente.
   * @param {Router} router - Servicio de enrutamiento de Angular.
   */
  constructor(private router: Router) {}

  /**
   * Función para cerrar sesión de usuario.
   * Limpia el localStorage y redirige al usuario a la página de inicio de sesión.
   */
  logout(): void {
    localStorage.clear(); // Limpia el localStorage completamente
    // O puedes usar localStorage.removeItem('tuItem') para borrar un ítem específico
    this.router.navigate(['/login']); // Redirige al usuario a la ruta de login
  }
}


