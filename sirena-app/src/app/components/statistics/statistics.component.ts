import { Input,Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ChartType,
  ApexYAxis
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})

export class StatisticsComponent {
  @ViewChild('chart') chart!: ChartComponent;
  @Input() vType!: ChartType;
  @Input() vName!: string;
  @Input() vData!: ApexAxisChartSeries;
  @Input() vText!: string;
  @Input() vChart!: ApexChart;
  @Input() vCategories!: string[];
  public chartOptions!: Partial<ChartOptions>;

  ngOnInit(): void {
    console.log(this.vData);
    this.chartOptions = {
      series:this.vData,
      chart: {
        type: this.vType,
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        }
      },
      xaxis: {
        type: "category",
        categories: this.vCategories,
      },
      yaxis: {
        title: {
          text: "Reservas Totales"
        }
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
  }
}