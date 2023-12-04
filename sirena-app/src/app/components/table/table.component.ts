import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Table } from 'src/app/models/table.model';
import {ChangeDetectorRef} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private cdr: ChangeDetectorRef,private http: HttpClient, private router: Router) {

  }
  
  @Input() table!: Table;
  @Input() route!: string;
  @Input() userRole!: string;
  @Output() reservationAction = new EventEmitter<{ id: string, action: string }>();
  indiceDesplegable: number | null = null;
  opcionSeleccionada: string[] = [];
  textoIngresado: string[] = [];
  desplegableAbierto: boolean[] = [];
  incidenciaEnviada: boolean[] = [];
  modalAbierto: boolean[] = [];
  modalIndex: number = -1;
  @Output() datosEnviados = new EventEmitter<any>();
  public tipoIncidencia: any[]=[];
  private headers!: HttpHeaders;


  ngOnInit(): void {
    this.initializeHeaders();
    this.loadIncidence();
    this.incidenciaEnviada = new Array(this.table.li_content.length).fill(false);

  }
  private initializeHeaders(): void {
    const token = localStorage.getItem('jwt');
    if (!token) {
      console.error('No token found!');
      return;
    }

    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  closeModal() {
    for (let i: number = 0; i < this.modalAbierto.length; i++) {
      if(this.modalAbierto[i] == true) this.toggleModal(i)
    }
  }
  toggleModal(i: number) {
    console.log(`Toggle modal called for index ${i}`);
    this.modalAbierto[i] = !this.modalAbierto[i];
    console.log(`Modal state for index ${i}: ${this.modalAbierto[i]}`);
  }
  // Función para manejar clics en botones
  vShowButton = false;
  debugRow(row: any) {
    console.log(row);
  }

  onReservationAction(id: string, action: string) {
    this.reservationAction.emit({ id, action });
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }

  showButton() {
    this.vShowButton= !this.vShowButton;
    console.log(this.vShowButton)
  }
  mostrarDesplegable(indice: number) {
    this.indiceDesplegable = indice;
  }
  camposLlenos(index: number): boolean {
    return !!this.opcionSeleccionada[index] && !!this.textoIngresado[index];
  }
  
  enviarDatos(indice: number) {
    const bookingId = this.table.li_content[indice][0]; // ID de la reserva
  
    const datos = {
      bookingId: bookingId,
      opcion: this.opcionSeleccionada[indice],
      texto: this.textoIngresado[indice]
    };
  
    // Simulando el envío de datos
    console.log('Datos a enviar:', datos);
    this.datosEnviados.emit(datos);
  
    // Mostrar alerta y cerrar desplegable
    window.alert('Incidencia creada');
    this.desplegableAbierto[indice] = false;
    this.closeModal();

    this.incidenciaEnviada[indice] = true;
  }

  async loadIncidence() {
    try {
      const response2 = await this.http.get('api/v1/incidenceType', { headers: this.headers }).toPromise();
      this.tipoIncidencia = response2 as any[];
      console.log(JSON.stringify(response2) + "Incidencias");
      
// Asignar la opción seleccionada después de cargar las opciones
    if (this.tipoIncidencia.length > 0) {
      for (let i = 0; i < this.table.li_content.length; i++) {
        this.opcionSeleccionada[i] = this.tipoIncidencia[0].ins_type_name;
      }
    }
    } catch (error) {
      console.error('Hubo un error al cargar las incidencias', error);
    }
  }
}