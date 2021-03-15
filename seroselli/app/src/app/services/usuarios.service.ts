import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './Post'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient){
    console.log('service is running!!');
  }

  getdata(){
    return this.http.get<Post[]>('https://localhost:44330/api/usuarios')
  }
}
