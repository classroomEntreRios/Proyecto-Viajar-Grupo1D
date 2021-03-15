import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private usuario : UsuariosService){
    this.usuario.getdata().subscribe(Usuario =>{
      console.log(Usuario);
    })
  }

}
