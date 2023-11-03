import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

/**
 * Servicio que implementa una guarda de ruta para controlar el acceso basado en roles.
 */
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  /**
   * Constructor del servicio `RoleGuard`.
   * @param {Router} router - Servicio de enrutamiento de Angular.
   */
  constructor(private router: Router) {}

  /**
   * Verifica si el usuario tiene el rol adecuado para acceder a la ruta.
   * @param {ActivatedRouteSnapshot} route - Instantánea de la ruta actual.
   * @param {RouterStateSnapshot} state - Instantánea del estado del enrutador.
   * @returns {boolean} - Devuelve `true` si el usuario tiene el rol adecuado, de lo contrario, redirige a la página de inicio de sesión y devuelve `false`.
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = localStorage.getItem('role');

    if (route.data['roles'] && route.data['roles'].indexOf(role) === -1) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
