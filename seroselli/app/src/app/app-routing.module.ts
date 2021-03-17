import { TerminosComponent } from './paginas/terminos/terminos.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { HomeComponent } from './paginas/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './paginas/register/register.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dash', component: DashboardComponent},
  {path: 'registrarse', component: RegisterComponent},
  {path: 'terminos', component: TerminosComponent},
  {path:'**', pathMatch:'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
