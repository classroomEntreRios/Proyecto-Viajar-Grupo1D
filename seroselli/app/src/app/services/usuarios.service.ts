import { Usuario } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginPanelComponent } from '../componentes/loginpanel/loginpanel.component';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  formData : Usuario ;
  readonly rootURL = 'https://localhost:44330/';
  constructor(private http: HttpClient){

  }
postUsuario(formData : Usuario){
  return this.http.post(this.rootURL+'api/usuarios',formData);

}
  }
