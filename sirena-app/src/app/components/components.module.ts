import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { GraphicSectionComponent } from './graphic-section/graphic-section.component';
import { NavSideBarComponent } from './nav-side-bar/nav-side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import {NgApexchartsModule} from 'ng-apexcharts';



@NgModule({
  declarations: [
    CardComponent,
    GraphicSectionComponent,
    NavSideBarComponent,
    NavBarComponent,
    TableComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgApexchartsModule
  ],
  exports:[
    CardComponent,
    GraphicSectionComponent,
    NavSideBarComponent,
    NavBarComponent,
    TableComponent,
    GraphComponent
  ]
})
export class ComponentsModule { }
