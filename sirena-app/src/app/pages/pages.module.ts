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
import { LoginComponent } from './f-session-views/login-page/login.component';
import { UsersViewComponent } from './f-admin-views/users-view/users-view.component';
import { ClassroomViewComponent } from './f-admin-views/classroom-view/classroom-view.component';
import { BookingViewComponent } from './f-admin-views/booking-view/booking-view.component';
import { BuildingViewComponent } from './f-admin-views/building-view/building-view.component';
import { FacultiesViewComponent } from './f-admin-views/faculties-view/faculties-view.component';
import { CrudFacultiesComponent } from './f-cruds/crud-faculties/crud-faculties.component';
import { CrudBuildingComponent } from './f-cruds/crud-building/crud-building.component';
<<<<<<< HEAD
import { StatisticsViewComponent } from './f-admin-views/statistics-view/statistics-view.component';
=======
import { ProgramsViewComponent } from './f-admin-views/programs-view/programs-view.component';
import { CrudProgramsComponent } from './f-cruds/crud-programs/crud-programs.component';
>>>>>>> origin





@NgModule({
  declarations: [
    HomeAdminComponent,
    HomeUserComponent,
    CRUDClassroomComponent,
    CRUDReservationComponent,
    CRUDReservationUpdateComponent,
    CRUDScheduleComponent,
    CRUDUsersComponent,
    LoginComponent,
    UsersViewComponent,
    ClassroomViewComponent,
    BookingViewComponent,
    BuildingViewComponent,
    FacultiesViewComponent,
    CrudFacultiesComponent,
    CrudBuildingComponent,
<<<<<<< HEAD
    StatisticsViewComponent
=======
    ProgramsViewComponent,
    CrudProgramsComponent
>>>>>>> origin
    
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    HomeAdminComponent,
    HomeUserComponent,
    UsersViewComponent,
    ClassroomViewComponent,
    BookingViewComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PagesModule { }
