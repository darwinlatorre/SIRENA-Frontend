import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSideBarComponent } from './nav-side-bar.component';

/**
 * Pruebas unitarias para el componente NavSideBarComponent.
 */
describe('NavSideBarComponent', () => {
  let component: NavSideBarComponent;
  let fixture: ComponentFixture<NavSideBarComponent>;

  /**
   * Configura el entorno de prueba antes de cada prueba.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavSideBarComponent]
    });
    fixture = TestBed.createComponent(NavSideBarComponent);
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

