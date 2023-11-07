import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Table } from 'src/app/models/table.model';

/**
 * Componente que representa una tabla en la aplicación.
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  /**
   * Propiedad de entrada que representa los datos de la tabla.
   * @type {Table}
   */
  @Input() table!: Table;

  /**
   * Propiedad de entrada que representa la ruta relacionada con la tabla.
   * @type {string}
   */
  @Input() route!: string;
}
