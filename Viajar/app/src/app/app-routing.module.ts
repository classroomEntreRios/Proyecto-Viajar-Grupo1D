import { TerminosComponent } from './paginas/terminos/terminos.component';
import { HomeComponent } from './paginas/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './paginas/register/register.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ClimaComponent } from './componentes/clima/clima.component';
import { ChatComponent } from './componentes/chat/chat.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'terminos', component: TerminosComponent},
  {path: 'clima', component: ClimaComponent},
  {path: 'chat', component: ChatComponent},
  {path:'**', pathMatch:'full', redirectTo: 'home'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
