import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TerminosComponent } from './terminos/terminos.component';



@NgModule({
  declarations: [HomeComponent, DashboardComponent, TerminosComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent
  ]
})
export class PaginasModule { }
