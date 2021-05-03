import { Observable } from 'rxjs';
import { User } from './../models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htttp: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  
  setLocalToken(token : string): void {
    localStorage.setItem("TokenAccess", token);
  }

  setSessionToken(token : string){
    sessionStorage.setItem("TokenAccess", token);
  }
  
setSessionUser(usuario : User){
    sessionStorage.setItem("SessionUser", JSON.stringify(usuario));
  }
  getSessionUser():User {
    let log = sessionStorage.getItem("SessionUser");
    if(log!=null){
     return JSON.parse(log); 
    }
   return new User(); 
  }

  getLocalToken():string{
    let log = localStorage.getItem("TokenAccess");
    if(log!=null){
     return log; 
    }
   return ""; 
  }



  getSessionToken():string {
    let log = sessionStorage.getItem("TokenAccess");
    if(log!=null){
     return log; 
    }
   return ""; 
  }

  borrarLocalStorage(){
   localStorage.removeItem("TokenAccess");
   localStorage.removeItem("LocalUser");
  }
  borrarSessionStorage(){
    sessionStorage.removeItem("TokenAccess");
    sessionStorage.removeItem("SessionUser");
   }

  }
