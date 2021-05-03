import { AuthService } from './../../services/auth.Service';
import { Logueado } from './../../models/usuario.model';
import { LoginService } from './../../services/login.service';
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder, Validators, CheckboxControlValueAccessor } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpanel',
  templateUrl: './loginpanel.component.html',
  styleUrls: ['./loginpanel.component.css']
})
export class LoginpanelComponent implements OnInit {

  @Output() usuarioLogueado = new EventEmitter<string>();
  @Output() cerrarLogin = new EventEmitter<boolean>();
  formLoginVal = this.fb.group({
    uemail: ['', [Validators.required, Validators.email, Validators.minLength(8)]],
    epassword: ['', [Validators.required,Validators.minLength(8), Validators.maxLength(12)]],
  })
  recordarme = new FormControl();
  botonSpin : boolean = false;
  respuestaPost = "";
  eye : string = "password";

  constructor(private login : LoginService, private fb : FormBuilder, private auth: AuthService, private router : Router) { }

  ngOnInit(): void {
      
  }

  eyefilter(){
    if(this.eye == "password")
    this.eye = "text";
    else
    this.eye = "password";
  }

  toRegistro(){
    this.cerrarLogin.emit(true);
    this.router.navigate(['/registro']);
  }

  onSubmit(){
    this.botonSpin = true;
    this.login.loginUsuario(this.formLoginVal.value).subscribe(data=>{ // devuelve 3 estados, email_err, pass_err, datos del usuario
      switch(data){
        case "emailErr":
          this.respuestaPost = "Correo no encontrado";
          break;
        case "passErr":
          this.respuestaPost = "Contraseña incorrecta";
          break;
        default:
          if(this.recordarme.value){
            this.auth.setLocalToken(data);
            this.auth.setSessionToken(data);
          }
          else{
            this.auth.setSessionToken(data);
          }
          data = "logged";
          break;
      }
      this.botonSpin = false;
      this.formLoginVal.reset();
      this.usuarioLogueado.emit(data);
    })
  }

}
