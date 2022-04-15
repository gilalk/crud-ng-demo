import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';
import {Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { HttpClientModule } from '@angular/common/http'
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuardService]},
  { path: 'courses/add-course', component: AddCourseComponent, canActivate: [AuthGuardService]},
  { path: 'courses/delete/:id', component: DeleteCourseComponent, canActivate: [AuthGuardService]},
  { path: 'courses/edit/:id', component: EditCourseComponent, canActivate: [AuthGuardService]},
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CoursesComponent,
    MenuComponent,
    AddCourseComponent,
    DeleteCourseComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
