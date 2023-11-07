import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/card.model';

/**
 * Componente que representa una tarjeta.
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  /**
   * Propiedad de entrada que representa la tarjeta a mostrar.
   * @type {Card}
   */
  @Input() card!: Card;
}
