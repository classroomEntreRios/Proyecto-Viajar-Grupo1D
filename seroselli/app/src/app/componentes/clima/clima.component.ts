import { CityModel } from './../../models/ciudad.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClimaService } from 'src/app/services/clima.service';


@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  listCiudades: CityModel[];
  ciudada : any ;
  wheather: any;
  cp: any;



  constructor(private climaService: ClimaService) { 

  }
   ngOnInit(): void {
   //this.cp='3100';
   this.obtenerCiudades();
   //this.buscarClima();
  }

  obtenerCiudades(){
    this.climaService.geListCiudades().subscribe(data => {
      this.listCiudades=data;
    })
  }
  buscarCP(){

    for(let i=0; i<this.listCiudades.length;i++){
      if(this.listCiudades[i].nombre == this.ciudada){
        this.cp = this.listCiudades[i].cp;
        i=this.listCiudades.length + 1;
      }
    }
    this.buscarClima();
  }

  buscarClima(){
    const newVal = this.cp;
    console.log("CP: "+newVal);
    this.climaService.getWheather(newVal).subscribe(datos => {
      this.wheather=datos;
      console.log("Datos: "+ this.wheather.name);
    })
  }


}
