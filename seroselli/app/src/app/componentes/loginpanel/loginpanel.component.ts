import { Usuario, LogUsuario, Logueado } from './../../models/usuario.model';
import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';
import {Router} from '@angular/router';
 
@Component({
  selector: 'app-login-panel',
  templateUrl: './loginpanel.component.html',
  styleUrls: ['./loginpanel.component.css']
})
export class LoginPanelComponent implements OnInit {

  notificacion : string = "oculto";
  mensaje : string;
  logeado : any = {display: "none"};

  @Output() eventoUsuario = new EventEmitter<Logueado>();

  constructor(public usuario :  UsuariosService) { }

  ngOnInit(): void {
      }
  resetForm(form : NgForm) {
    if(form.value != null){
    this.usuario.formLog ={
        uemail : '',
        epassword : ''
      }

    }

  }
  onSubmit(form : NgForm){
    this.insertRecord(form);
      }
  
  insertRecord(form : NgForm){
   this.usuario.postUsuarioLog(form.value).subscribe( res => {
     if(res == 0){
      this.mensaje="Email no registrado";
       this.notificacion="alert-danger visible"
     }
     if(res == 1){
      this.mensaje="Contraseña incorrecta";
      this.notificacion="alert-danger visible"
    }
    if(res == 2){
      this.mensaje="Logeado correctamente";
      this.notificacion="alert-success visible"
    }

    this.usuario.getUsuarioLog().subscribe(data => this.eventoUsuario.emit(data));
        
  })

}
}