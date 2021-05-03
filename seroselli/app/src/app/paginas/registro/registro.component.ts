import { Logueado } from './../../models/usuario.model';
import { AuthService } from './../../services/auth.Service';
import { Routes, RouterModule, Router } from '@angular/router';
import { RegistroService } from './../../services/registro.service';
import { SharedService } from './../../services/shared.service';
import { LoginService } from './../../services/login.service';
import { FormGroup, FormControl, Validators, FormControlName, ValidatorFn} from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @Output() reloadUser = new EventEmitter<string>();

  formRegistro : FormGroup;
  data : Logueado;
  yaregistrado : boolean;
  botonSpin : boolean;
  constructor(private login: LoginService, private _shared: SharedService, private http : HttpClient, private registro : RegistroService, private router : Router, private auth : AuthService) { }

  
  ngOnInit(): void {
    this.formRegistro = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(50),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      nombre :  new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      apellido :  new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      imaPerfil :  new FormControl(this.getRandomColor()),
      otrodato : new FormControl('')
    })
  }

  validationEmail(){
    if(this.formRegistro.controls['email'].valid){
      this.registro.chequearEmail(this.formRegistro.controls['email'].value).subscribe(a=>this.yaregistrado=a);
    }
  }

  getRandomColor():string {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      onSubmit(){
        this.botonSpin = true;
        if(!this.yaregistrado){
          this.registro.registrarUsuario(this.formRegistro.value).subscribe(dato=>{
            this.auth.setSessionToken(dato);
            this.login.getDataUser(dato).subscribe(usuario =>{
              this.auth.setSessionUser(usuario);
            })
          this._shared.emitChange("logged");
          this.botonSpin = false;
          this.formRegistro.reset;
          this.router.navigate(['/inicio']);
          });
        }
      }
}
