import { SharedService } from './../../services/shared.service';
import { AuthService } from './../../services/auth.Service';
import { NgForm, NgModel, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from './../../services/login.service';
import { Logueado, Tokken } from './../../models/usuario.model';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { empty } from 'rxjs';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent implements OnChanges {

  @Output() btnAcceder = new EventEmitter<boolean>();//ENVIA EVENTO de click en boton ACCEDER
  @Output() btnMenu = new EventEmitter<boolean>();//ENVIA EVENTO de click en boton MENU
  @Input() logueo : string; //RECIBIR EVENTO DE APPCOMPONENT PARENT->CHILD
  LocalToken: string;
  SessionToken : string;
  colorEstado : string;
  nombre : string;

  constructor( private login: LoginService, private auth : AuthService, private _shared : SharedService) { }

  ngOnChanges(): void {
      this.SessionToken = this.auth.getSessionToken();
      switch(this.logueo){
      case "logged":
        this.reanudarLoggin(this.SessionToken);
        break;
      case "closed":
        this.cerrarLogin();
        break;
      case "change":
        this.reanudarLoggin(this.SessionToken);
        break;
      default:
        this.cerrarLogin();
        break;
    }

  }

  generarCambios(evento : string){
    if(evento == "menu"){
      this.btnMenu.emit(true);
    }
    else{
      this.btnAcceder.emit(true);
    }    
  }


  reanudarLoggin(token : string){//chequear token en base de datos
      this.login.getDataUser(token).subscribe(usuario =>{
        if(usuario.token != "NO"){
          this.nombre = usuario.nombre;
          this.colorEstado = usuario.imaPerfil;
          this.auth.setSessionUser(usuario);
        }
        else{
          this.nombre = "Acceder ->";
          this.colorEstado = "white";
        }
      })
    }

  cerrarLogin(){
    this.nombre = "Acceder ->";
    this.colorEstado = "white";
    this.auth.borrarSessionStorage();
  }
    
  }


