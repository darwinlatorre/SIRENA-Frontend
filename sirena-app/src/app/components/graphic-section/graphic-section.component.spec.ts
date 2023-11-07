import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicSectionComponent } from './graphic-section.component';

/**
 * Pruebas unitarias para el componente GraphicSectionComponent.
 */
describe('GraphicSectionComponent', () => {
  let component: GraphicSectionComponent;
  let fixture: ComponentFixture<GraphicSectionComponent>;

  /**
   * Configura el entorno de prueba antes de cada prueba.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicSectionComponent]
    });
    fixture = TestBed.createComponent(GraphicSectionComponent);
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