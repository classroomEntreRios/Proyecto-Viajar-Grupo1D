import { Observable } from 'rxjs';
import { Logueado } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditarService {
  readonly ApiEditarPerfil = 'https://localhost:44330/api/editarPerfil/ReemplazarPerfil/'
  readonly ApiChechPass = 'https://localhost:44330/api/password/checkpass/'
  constructor(private http : HttpClient) { }

  editarPerfil(usuario : Logueado):Observable<boolean>{
    console.log("EditarPerfil: "+ JSON.stringify(usuario))
    return this.http.post<boolean>(this.ApiEditarPerfil,usuario);
  }

  checkPass(data : FormData): Observable<boolean>{
    return this.http.post<boolean>(this.ApiChechPass, data);
  }

}
