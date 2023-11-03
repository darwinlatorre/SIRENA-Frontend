import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

/**
 * Pruebas unitarias para el componente CardComponent.
 */
describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  /**
   * Configura el entorno de prueba antes de cada prueba.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    });
    fixture = TestBed.createComponent(CardComponent);
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