import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { LoginPanelComponent } from './componentes/loginpanel/loginpanel.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { UsuariosService } from './services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './paginas/register/register.component';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { ForoComponent } from './paginas/foro/foro.component';
import { ClimaComponent } from './componentes/clima/clima.component';
import { ClimaService } from './services/clima.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginPanelComponent,
    RegisterComponent,
    SidenavComponent,
    DashboardComponent,
    ChatComponent,
    ForoComponent,
    ClimaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UsuariosService, ClimaService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
