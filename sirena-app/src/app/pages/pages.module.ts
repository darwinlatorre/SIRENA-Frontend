import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './f-admin-views/home-admin/home-admin.component';
import { HomeUserComponent } from './f-user-views/home-user/home-user.component';
import { ComponentsModule } from '../components/components.module';
import { CRUDClassroomComponent } from './f-cruds/crud-classroom/crud-classroom.component';
import { CRUDReservationComponent } from './f-cruds/crud-reservation/crud-reservation.component';
import { CRUDReservationUpdateComponent } from './f-cruds/crud-reservation-update/crud-reservation-update.component';
import { CRUDScheduleComponent } from './f-cruds/crud-schedule/crud-schedule.component';
import { CRUDUsersComponent } from './f-cruds/crud-users/crud-users.component';
import { LoginComponent } from './f-session-view/login-page/login.component';




@NgModule({
  declarations: [
    HomeAdminComponent,
    HomeUserComponent,
    CRUDClassroomComponent,
    CRUDReservationComponent,
    CRUDReservationUpdateComponent,
    CRUDScheduleComponent,
    CRUDUsersComponent,
    LoginComponent
    
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
