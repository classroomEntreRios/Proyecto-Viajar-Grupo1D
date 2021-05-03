import { CityModel } from './../../models/ciudad.model';
import { ClimaService } from 'src/app/services/clima.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  ciudades : CityModel[];
  cities :  string [] = [];
  @Output() citySelected = new EventEmitter<string>();
  constructor(private clima : ClimaService) { }

  ngOnInit(): void {
    this.obtenerCiudades();
  }

  public city : string ;

  cambiarNombre(cityNum: any){
    this.citySelected.emit(this.cities[cityNum]);
    console.log(cityNum);
  }

obtenerCiudades(){
  this.clima.geListCiudades().subscribe( data => {
    this.ciudades = data;
    for (let i = 0; i < this.ciudades.length; i++) {
    this.cities.push(this.ciudades[i].nombre);
    console.log(i+": "+this.ciudades[i].nombre);
    }
  })
}
}
