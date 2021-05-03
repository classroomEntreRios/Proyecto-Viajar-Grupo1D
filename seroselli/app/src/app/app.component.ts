import { SharedService } from './services/shared.service';
import { AuthService } from './services/auth.Service';
import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

 logged : string; //ENVIAR INFO A NAVBAR PARENT->CHILD
 btnLogin: boolean = true; //recibir evento de abrir/cerrar de paneles de usuario (login o perfil)
 btnMenu: boolean = true; //recibir evento de abrir/cerrar de menu (menu o dashboard)
 tipo : string;

 constructor(private _sharedService: SharedService,private auth: AuthService) {

    _sharedService.changeEmitted$.subscribe(evento => { //recibir eventos desde cualquier componente
        this.recibirEvento(evento);    
    });
}

recibirEvento(evento : string){//RECIBIR EVENTO DE LOGINPANEL CHILD->PARENT
   this.logged = evento;//reenvio la informacion a NAVBAR
  switch(evento){
    case "logged":
      this.btnLogin = false; //habilita PerfilPanel y deshabilita LoginPanel
      break;
    case "pass_err":
      this.btnLogin = true; //habilita LoginPanel y deshabilita PerfilPanel
      break;
    case "email_err":
      this.btnLogin = true; //habilita LoginPanel y deshabilita PerfilPanel
      break;
      case "change":
        this.btnLogin = false;
        break;
    default:
      this.btnLogin = true; //habilita LoginPanel y deshabilita PerfilPanel
      break;
  }
 }
 cambiosBtnAcceder(evento : boolean){
   if(this.btnLogin){
     $("app-loginpanel").toggle("fast");
   }
   else{
     $("app-perfilpanel").toggle("fast");
   }    
 }

 cambiosBtnMenu(evento : boolean){
   if(this.btnMenu){
     $("app-menu").toggle("fast");
   }
  else{
    $("app-dashboard").toggle("fast");
  }
 }
}
