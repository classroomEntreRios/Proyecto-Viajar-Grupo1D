import { ForumService } from './services/forum.service';
import { SharedService } from './services/shared.service';
import { EditarService } from './services/editar.service';
import { PerfilpanelComponent } from './componentes/perfilpanel/perfilpanel.component';
import { AuthService } from './services/auth.Service';
import { HttpClientModule } from '@angular/common/http';
import { RegistroService } from './services/registro.service';
import { LoginService } from './services/login.service';
import { ClimaService } from './services/clima.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginpanelComponent } from './componentes/loginpanel/loginpanel.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { ForoComponent } from './paginas/foro/foro.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { TerminosComponent } from './paginas/terminos/terminos.component';
import { ClimaComponent } from './componentes/clima/clima.component';
import { ItinerarioComponent } from './paginas/itinerario/itinerario.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { TiempoComponent } from './componentes/tiempo/tiempo.component';
import { CiudadesComponent } from './paginas/ciudades/ciudades.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MenuComponent,
    LoginpanelComponent,
    DashboardComponent,
    FooterComponent,
    RegistroComponent,
    ForoComponent,
    ContactoComponent,
    TerminosComponent,
    ClimaComponent,
    ItinerarioComponent,
    MapaComponent,
    TiempoComponent,
    CiudadesComponent,
    PerfilComponent,
    PerfilpanelComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ColorPickerModule
  ],
  providers: [ClimaService, ForumService, LoginService, RegistroService, AuthService, EditarService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
