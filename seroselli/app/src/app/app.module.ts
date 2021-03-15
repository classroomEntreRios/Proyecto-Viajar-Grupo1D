import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { LoginPanelComponent } from './componentes/loginpanel/loginpanel.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PaginasModule } from './paginas/paginas.module';

import { UsuariosService } from './services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginasModule,
    HttpClientModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
