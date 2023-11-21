// pages-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa tus componentes
import { BookingViewComponent } from 'src/app/pages/f-admin-views/booking-view/booking-view.component'
import { ClassroomViewComponent } from 'src/app/pages/f-admin-views/classroom-view/classroom-view.component';
import { HomeAdminComponent } from 'src/app/pages/f-admin-views/home-admin/home-admin.component';
import { UsersViewComponent } from 'src/app/pages/f-admin-views/users-view/users-view.component';
import { LoginComponent } from 'src/app/pages/f-session-views/login-page/login.component';
import { HomeUserComponent } from 'src/app/pages/f-user-views/home-user/home-user.component';
import { CRUDUsersComponent } from 'src/app/pages/f-cruds/crud-users/crud-users.component';
import { CRUDClassroomComponent } from './pages/f-cruds/crud-classroom/crud-classroom.component';
import { CRUDReservationComponent } from './pages/f-cruds/crud-reservation/crud-reservation.component';
import { RoleGuard } from './controllers/RoleGard';
import { BuildingViewComponent } from './pages/f-admin-views/building-view/building-view.component';
import { FacultiesViewComponent } from './pages/f-admin-views/faculties-view/faculties-view.component';
import { CrudBuildingComponent } from './pages/f-cruds/crud-building/crud-building.component';
import { CrudFacultiesComponent } from './pages/f-cruds/crud-faculties/crud-faculties.component';
import { StatisticsViewComponent } from './pages/f-admin-views/statistics-view/statistics-view.component';
import { CrudProgramsComponent } from './pages/f-cruds/crud-programs/crud-programs.component';
import { ProgramsViewComponent } from './pages/f-admin-views/programs-view/programs-view.component';
// ... importa los demás componentes de cruds

const routes: Routes = [
  { path: 'admin/booking', component: BookingViewComponent, canActivate: [RoleGuard], data: { roles: ['ROLE_ADMIN', 'ROLE_COORDINADOR'] } },
  { path: 'admin/classroom', component: ClassroomViewComponent, canActivate: [RoleGuard], data: { roles: ['ROLE_ADMIN', 'ROLE_COORDINADOR'] } },
  { path: 'admin/home', component: HomeAdminComponent, canActivate: [RoleGuard], data: { roles: ['ROLE_ADMIN', 'ROLE_COORDINADOR'] } },
  { path: 'admin/users', component: UsersViewComponent, canActivate: [RoleGuard], data: { roles: ['ROLE_ADMIN', 'ROLE_COORDINADOR'] } },
  { path: 'login', component: LoginComponent},
  { path: 'user/home', component: HomeUserComponent },
  {path: 'admin/users/create', component: CRUDUsersComponent, canActivate: [RoleGuard], data: { roles: ['ROLE_ADMIN', 'ROLE_COORDINADOR'] }},
  {path: 'admin/classroom/create', component: CRUDClassroomComponent, canActivate: [RoleGuard], data: { roles: ['ROLE_ADMIN', 'ROLE_COORDINADOR'] }},
  {path: 'admin/booking/create', component: CRUDReservationComponent, canActivate: [RoleGuard], data: { roles: ['ROLE_ADMIN', 'ROLE_COORDINADOR'] }},
  {path: 'admin/building', component: BuildingViewComponent, canActivate: [RoleGuard], data: {roles: ['ROLE_ADMIN']}},
  {path: 'admin/faculties', component: FacultiesViewComponent, canActivate: [RoleGuard], data: {roles: ['ROLE_ADMIN']}},
  {path: 'admin/statistics', component: StatisticsViewComponent, canActivate: [RoleGuard], data: {roles: ['ROLE_ADMIN', 'ROLE_COORDINADOR']}},

  {path: 'admin/building/create', component: CrudBuildingComponent, canActivate: [RoleGuard], data: { roles: ['ROLE_ADMIN'] }},
  {path: 'admin/faculties/create', component: CrudFacultiesComponent, canActivate: [RoleGuard], data: { roles: ['ROLE_ADMIN'] }},

  {path: 'admin/programs', component: ProgramsViewComponent, canActivate: [RoleGuard], data: { roles: ['ROLE_ADMIN'] }},
  {path: 'admin/programs/create', component: CrudProgramsComponent, canActivate: [RoleGuard], data: { roles: ['ROLE_ADMIN'] }},

  {path: '', component: LoginComponent}
  // ... añade las rutas para los componentes dentro de f-cruds
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
