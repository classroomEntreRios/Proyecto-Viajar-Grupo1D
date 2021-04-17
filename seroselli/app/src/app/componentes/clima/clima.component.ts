import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClimaService } from 'src/app/services/clima.service';


@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  listCiudades: any[] = [];
  wheather;
  cp;
  cp_i;

  form: FormGroup;
  constructor(private fb: FormBuilder, 
    private _climaService: ClimaService) { 
    this.form = this.fb.group({
      cp:['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    })
  }
 

  ngOnInit(): void {
   //this.cp='3100';
   this.obtenerCiudades();
   //this.buscarClima();
  }

  obtenerCiudades(){
    this._climaService.geListCiudades().subscribe(data => {
      console.log(data);
      this.listCiudades=data;
    }, error => {
      console.log(error);
    
    })
  }

  buscarClima(){
    console.log(this.form);
    const cp: any = {
      cp: this.form.get('cp')?.value

    }
    
    

    const newVal = this.form.get('cp')?.value;
    this._climaService.getWheather(newVal).subscribe(datos => {
      this.wheather=datos;
    })

    this.form.reset();
    
    
  }

  

}
