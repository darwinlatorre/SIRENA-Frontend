import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ComponentsModule } from '../components/components.module';
import { CRUDClassroomComponent } from './crud-classroom/crud-classroom.component';
import { CRUDScheduleComponent } from './crud-schedule/crud-schedule.component';
import { CRUDReservationComponent } from './crud-reservation/crud-reservation.component';
import { CRUDUsersComponent } from './crud-users/crud-users.component';
import { CRUDReservationUpdateComponent } from './crud-reservation-update/crud-reservation-update.component';



@NgModule({
  declarations: [
    HomeAdminComponent,
    HomeUserComponent,
    CRUDClassroomComponent,
    CRUDScheduleComponent,
    CRUDReservationComponent,
    CRUDUsersComponent,
    CRUDReservationUpdateComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    HomeAdminComponent,
    HomeUserComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PagesModule { }
