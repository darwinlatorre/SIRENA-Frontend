import { ShareSelectItemService } from './../../../services/shareSelectItem/share-select-item.service';
import { StatisticsComponent } from './../../../components/statistics/statistics.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ChartOptions } from 'src/app/components/statistics/statistics.component';
import { delay, switchMap, timeout } from 'rxjs';
import { Statistics } from 'src/app/models/statistics.model';

type tTuple = [number,string,number];
@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.css'],
})
export class StatisticsViewComponent {
 
  constructor(
    private http: HttpClient,
    private ShareSelectItemService: ShareSelectItemService
  ) {}

  //vars
  data_tuple : tTuple[] = [];
  ent_ids: string[] = [];
  role_nav: string = 'postgraduates';
  option_statistic!: string;
  booking_count: number[] = [];
  vBool: boolean = false;
  //Inputs
  categories: string[] = [];
  data_graph: number[] = [];

  ngOnInit(): void {
  this.getDataSelectedItem();
  }


  getDataSelectedItem() {
    const token = localStorage.getItem('jwt'); // Suponiendo que se use autenticación JWT
    if (!token) {
      console.error('No token found!');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.ShareSelectItemService.elementSelected$.pipe(
      switchMap((element) => {
        if (element) {
          this.processSelectedItem(element);
          return this.http.get<Statistics[]>(`/api/v1/statistics/${this.option_statistic}`,{ headers: headers });
        }
        // Si element es nulo, no realizar la solicitud HTTP
        return [];
      })
    ).subscribe({
      next: (data) => {
        this.categories = [];
        this.data_graph = [];
        console.log('Statistics data received:', data);
        this.ent_ids = data.map((obj) => obj.entity_id);
        console.log("ents",this.ent_ids);
        this.booking_count = data.map((obj) => obj.bokings_ids.length);
        console.log("books",this.booking_count);
        for(let x = 0; x<this.ent_ids.length; x++){
          this.fetchOption(this.option_statistic,this.ent_ids[x]);
        }

      },
      error: (err) => {
        console.error('Error al obtener las estadisticas', err);
      }
    });
  }
  processSelectedItem(element: string) {
    switch (element) {
      case 'Facultad':
        this.option_statistic = 'faculty';
        break;
      case 'Edificio':
        this.option_statistic = 'building';
        break;
      case 'Programa':
        this.option_statistic = 'programs';
        break;
      case 'Salon':
        this.option_statistic = 'classroom';
        break;
    }
  }
  fetchOption(option_selected: string, id_program:string) {
    const token = localStorage.getItem('jwt'); // Suponiendo que se use autenticación JWT
    if (!token) {
      console.error('No token found!');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<any>(`/api/v1/${option_selected}/${id_program}`, { headers: headers })
      .subscribe ({
        next: (data) => {
          console.log('data received:', data);
          for(let x = 1; x <=this.booking_count.length; x++){
            if(x== data.id){
              this.data_tuple = [data.id, data.name,this.booking_count[x-1]];
              console.log(this.data_tuple)
            }
            
          }
          this.categories.push(this.data_tuple[1].toString());
          if (typeof this.data_tuple[2] === 'number') {
            this.data_graph.push(this.data_tuple[2]);
          }
          this.vBool = true;
        },
        error: (err) => {
          console.error('Error fetching classrooms:', err);
        },
        complete: () => {
          this.vBool = true;
        }
      });
  }
}
