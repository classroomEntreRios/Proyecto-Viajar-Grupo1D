import { AuthService } from './auth.Service';
import { Logueado, User } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly ApiLogin = 'https://localhost:44330/api/login/request/';
  readonly ApiGetData = 'https://localhost:44330/api/checkTokens/getData/?token=';
  readonly ApiGetPower = 'https://localhost:44330/api/password/Poderes/?token=';

  constructor(private http: HttpClient, private auth : AuthService){
  }

loginUsuario(formData : any) : Observable<string>{
  return this.http.post<string>(this.ApiLogin,formData);

}

getDataUser(token : string):Observable<User>{
  return this.http.get<User>(this.ApiGetData+token);
}

havePower():boolean{
  this.http.get<number>(this.ApiGetPower+this.auth.getSessionToken()).subscribe(power=>{
    return power<462555;
  },
  err=>{
    return false;
  });
  return false;
}


}

