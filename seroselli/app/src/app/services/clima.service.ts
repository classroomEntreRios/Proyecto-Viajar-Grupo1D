import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private myAppUrl ='https://localhost:44330/';
  private myApiUrl ='api/clima/';

  private uri: string = 'http://api.openweathermap.org/data/2.5/weather?zip='; //nuevo del wheater
  private apikey: string ='beb72ec9bb9271574162dab5b8147a9c'; //nuevo del wheater

  

  constructor(private http: HttpClient) {  }

  geListCiudades(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  
  getWheather(cp: any): Observable<any> {
   // console.log(cp);
    //return this.http.get(this.uri+cp+','+'ar'+'&lang=es'+'&appid='+this.apikey+'&units=metric');//nuevo del wheater
   // return this.http.get(this.uri+cp+",ar&lang=es&appid="+this.apikey+"&units=metric");//nuevo del wheater
   return this.http.get("https://api.openweathermap.org/data/2.5/weather?zip="+cp+",ar&lang=es&appid=beb72ec9bb9271574162dab5b8147a9c&units=metric");
  }

}
