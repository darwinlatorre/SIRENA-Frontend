import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { GraphicSectionComponent } from './graphic-section/graphic-section.component';
import { NavSideBarComponent } from './nav-side-bar/nav-side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    CardComponent,
    GraphicSectionComponent,
    NavSideBarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    GraphicSectionComponent,
    NavSideBarComponent,
    NavBarComponent
  ]
})
export class ComponentsModule { }
