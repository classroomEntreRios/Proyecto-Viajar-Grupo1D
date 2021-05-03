import { PerfilComponent } from './paginas/perfil/perfil.component';
import { TiempoComponent } from './componentes/tiempo/tiempo.component';
import { ClimaComponent } from './componentes/clima/clima.component';
import { CiudadesComponent } from './paginas/ciudades/ciudades.component';
import { ItinerarioComponent } from './paginas/itinerario/itinerario.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { TerminosComponent } from './paginas/terminos/terminos.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { ForoComponent } from './paginas/foro/foro.component';
import { HomeComponent } from './paginas/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'foro', component: ForoComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'clima', component: ClimaComponent},
  {path: 'tiempo', component: TiempoComponent},
  {path: 'ciudades', component: CiudadesComponent},
  {path: 'itinerario', component: ItinerarioComponent},
  {path: 'terminos', component: TerminosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
