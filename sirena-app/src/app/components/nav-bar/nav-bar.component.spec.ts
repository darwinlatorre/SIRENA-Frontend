import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

/**
 * Pruebas unitarias para el componente NavBarComponent.
 */
describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  /**
   * Configura el entorno de prueba antes de cada prueba.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent]
    });
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Prueba si el componente se ha creado exitosamente.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
