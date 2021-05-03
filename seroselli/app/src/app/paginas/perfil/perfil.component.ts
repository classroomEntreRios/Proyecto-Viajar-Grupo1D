import { LoginService } from './../../services/login.service';
import { SharedService } from './../../services/shared.service';
import { EditarService } from './../../services/editar.service';
import { User } from './../../models/usuario.model';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './../../services/auth.Service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

@Output() reloadUser = new EventEmitter<string>();
usuarioLogueado : User;

edite : boolean = true;
PassIncorrecta : boolean = false;
botonSpin : boolean = false;
constructor(private auth : AuthService, private sanitizer: DomSanitizer, private fb : FormBuilder, private editar : EditarService, private _shared : SharedService, private login : LoginService) { }
  
formEditar : FormGroup;
formPassword : FormGroup;
data : FormGroup;
color : string;

  ngOnInit(): void { 
    this.initialize();
  }

  initialize(){
    this.edite = true;
    this.usuarioLogueado = this.auth.getSessionUser();
    this.color = this.usuarioLogueado.imaPerfil;
    this.formEditar = new FormGroup({
      email: new FormControl(this.usuarioLogueado.email),
      nombre :  new FormControl(this.usuarioLogueado.nombre, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      apellido :  new FormControl(this.usuarioLogueado.apellido, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      imaPerfil :  new FormControl(this.usuarioLogueado.imaPerfil),
      otrodato :  new FormControl(this.usuarioLogueado.otrodato)
    })
  
    this.formPassword = new FormGroup({
      uemail: new FormControl(this.usuarioLogueado.email),
      epassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)])
    })
  }


  onSubmit(){
    this.botonSpin = true;
    this.formEditar.controls['imaPerfil'].setValue(this.color);
    this.usuarioLogueado = this.formEditar.value;
    this.login.loginUsuario(this.formPassword.value).subscribe(respuesta => {
      this.PassIncorrecta = "passErr" == respuesta;
      this.editarPerfil(respuesta);
    });
  }  


    editarPerfil(token : string){
      this.editar.editarPerfil(this.formEditar.value).subscribe(a=>{
          if(a){
            this.auth.setSessionUser(this.usuarioLogueado);
            this._shared.emitChange("change");
          }
      });
      this.formEditar.reset;
      this.formPassword.reset;
      setInterval(()=>{
          this.botonSpin = false;
          this.initialize();
      },2000)
      
    }
  }

