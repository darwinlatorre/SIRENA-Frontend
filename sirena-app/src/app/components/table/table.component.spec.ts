import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

/**
 * Pruebas unitarias para el componente TableComponent.
 */
describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  /**
   * Configura el entorno de prueba antes de cada prueba.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent]
    });
    fixture = TestBed.createComponent(TableComponent);
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

