import { newUser } from './../models/usuario.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  readonly ApiCheckCorreos = 'https://localhost:44330/api/Registro/Nuevo/'
  readonly ApichequearEmail = 'https://localhost:44330/api/Registro/checkEmail/?email=';
  constructor(private http: HttpClient) { }

  registrarUsuario(usuario : newUser):Observable<string>{
    return this.http.post<string>(this.ApiCheckCorreos,usuario);
  }

chequearEmail(email : string):Observable<boolean>{
  return this.http.get<boolean>(this.ApichequearEmail+email);

}


}
