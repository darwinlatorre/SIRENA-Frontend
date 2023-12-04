import { StatisticsComponent } from './../../../components/statistics/statistics.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay, switchMap, timeout } from 'rxjs';
import { Statistics } from 'src/app/models/statistics.model';
import { ApexAxisChartSeries } from 'ng-apexcharts';
@Component({
  selector: 'app-statistics-coord-view',
  templateUrl: './statistics-coord-view.component.html',
  styleUrls: ['./statistics-coord-view.component.css']
})
export class StatisticsCoordViewComponent {

  constructor(
    private http: HttpClient
  ) {}
  

  //vars
  v_bool: boolean = false;
  ent_ids!: number;
  role_nav: string = 'coordinator';

  //Inputs
  categories_building: string[] = [];
  categories_faculty: string[] = [];
  categories_programs: string[] = [];
  categories_classroom: string[] = [];
  //Data
  data_building: ApexAxisChartSeries = [];
  data_faculty: ApexAxisChartSeries = [];
  data_programs: ApexAxisChartSeries = [];
  data_classroom: ApexAxisChartSeries = [];


  ngOnInit(): void {
    setTimeout(() => {
    this.v_bool = true;
    }, 500);
    this.fetchStatisticsClassroom();
    this.fetchStatisticsProgram();
    this.fetchStatisticsFaculty();
    this.fetchStatisticsBuilding();
  }

  fetchStatisticsClassroom() {
    const token = localStorage.getItem('jwt');

    if (!token) {
      console.error('No token found!');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<Statistics>('/api/v1/statistics/classroom', { headers: headers })
      .subscribe({
        next: (data) => {
          console.log(data);
          if (Array.isArray(data)) {
            this.data_classroom = [
              { name: "RESERVAS ACEPTADAS", data: data.map(item => item.reservas_aceptadas), color: '#2ECC71'},
              { name: "RESERVAS RECHAZADAS", data: data.map(item => item.reservas_rechazadas), color: '#E74C3C' },
              { name: "RESERVAS PENDIENTES", data: data.map(item => item.reservas_pendientes), color: '#34495E' }
          ];
          data.map((item)=>{
            this.categories_classroom.push(item.name);
          })
          } else {
            console.error('Invalid response format:', data);
          }
        },
        error: (err) => {
          console.error('Error fetching classrooms:', err);
        }
      });
  }
  fetchStatisticsBuilding() {
    const token = localStorage.getItem('jwt');

    if (!token) {
      console.error('No token found!');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<Statistics>('/api/v1/statistics/building', { headers: headers })
      .subscribe({
        next: (data) => {
          console.log(data);
          if (Array.isArray(data)) {
            this.data_building = [
              { name: "RESERVAS ACEPTADAS", data: data.map(item => item.reservas_aceptadas), color: '#2ECC71'},
              { name: "RESERVAS RECHAZADAS", data: data.map(item => item.reservas_rechazadas), color: '#E74C3C' },
              { name: "RESERVAS PENDIENTES", data: data.map(item => item.reservas_pendientes), color: '#34495E' }
          ];
          data.map((item)=>{
            this.categories_building.push(item.name);
          })
          console.log(this.data_building);
          } else {
            console.error('Invalid response format:', data);
          }
        },
        error: (err) => {
          console.error('Error fetching classrooms:', err);
        }
      });
  }
  fetchStatisticsFaculty() {
    const token = localStorage.getItem('jwt');

    if (!token) {
      console.error('No token found!');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<Statistics>('/api/v1/statistics/faculty', { headers: headers })
      .subscribe({
        next: (data) => {
          console.log(data);
          if (Array.isArray(data)) {
            this.data_faculty = [
              { name: "RESERVAS ACEPTADAS", data: data.map(item => item.reservas_aceptadas), color: '#2ECC71'},
              { name: "RESERVAS RECHAZADAS", data: data.map(item => item.reservas_rechazadas), color: '#E74C3C' },
              { name: "RESERVAS PENDIENTES", data: data.map(item => item.reservas_pendientes), color: '#34495E' }
          ];
          data.map((item)=>{
            this.categories_faculty.push(item.name);
          })
          } else {
            console.error('Invalid response format:', data);
          }
        },
        error: (err) => {
          console.error('Error fetching classrooms:', err);
        }
      });
  }
  fetchStatisticsProgram() {
    const token = localStorage.getItem('jwt');

    if (!token) {
      console.error('No token found!');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<Statistics>('/api/v1/statistics/programs', { headers: headers })
      .subscribe({
        next: (data) => {
          console.log(data);
          if (Array.isArray(data)) {
            this.data_programs = [
              { name: "RESERVAS ACEPTADAS", data: data.map(item => item.reservas_aceptadas), color: '#2ECC71'},
              { name: "RESERVAS RECHAZADAS", data: data.map(item => item.reservas_rechazadas), color: '#E74C3C' },
              { name: "RESERVAS PENDIENTES", data: data.map(item => item.reservas_pendientes), color: '#34495E' }
          ];
          data.map((item)=>{
            this.categories_programs.push(item.name);
          })
          } else {
            console.error('Invalid response format:', data);
          }
        },
        error: (err) => {
          console.error('Error fetching classrooms:', err);
        }
      });
  }

}
