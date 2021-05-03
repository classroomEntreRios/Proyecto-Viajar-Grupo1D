import { HttpClient } from '@angular/common/http';
import { Foro, subForo } from './../models/foro.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  readonly ApiForo = 'https://localhost:44330/api/forum/subforos/?id=';


  getForos():Observable<Foro[]>{
    return this.http.get<Foro[]>(this.ApiForo);
  }
  getSubForos(id : number):Observable<subForo[]>{
    return this.http.get<subForo[]>(this.ApiForo+id);
  }

}
