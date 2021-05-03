import { NgForm } from '@angular/forms';
import { Usuario, LogUsuario, Logueado } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginPanelComponent } from '../componentes/loginpanel/loginpanel.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public formData : Usuario ;
  public formLog : LogUsuario;
  public static usuarioLogeado : Logueado;
  readonly rootURL = 'https://localhost:44330/';
  readonly ApiLogueado = 'api/usuarios/Logan/';
  readonly ApiLogin = 'api/usuarios/Logon/';

  constructor(private http: HttpClient){

  }



postUsuario(formData : Usuario){
  return this.http.post(this.rootURL+'api/usuarios/Registrar',this.formData);

}
  //'https://localhost:44330/api/usuarios/Logon/form = 
postUsuarioLog(form : LogUsuario):Observable<any>{
  return this.http.post(this.rootURL+this.ApiLogin,form);

}

getUsuarioLog():Observable<Logueado>{
  return this.http.get<Logueado>(this.rootURL+this.ApiLogueado);
}
  }
