import { HttpClient } from '@angular/common/http';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit, Injectable } from '@angular/core';
import { UsuariosService } from './../../services/usuarios.service';
import { FormControl, NgForm, FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { from, observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( public usuarioService : UsuariosService) { }

    ngOnInit(): void {
      this.resetForm();
    }

    resetForm(form?:NgForm) {
      if(form!=null)
        form.resetForm();
      
  
      this.usuarioService.formData ={
        nombre :  '',
        apellido : '',
        uemail : '',
        epassword : ''
      }
    
    }

    onSubmit(form:NgForm){
      this.insertRecord(form);
    }

    insertRecord(form : NgForm){
      this.usuarioService.postUsuario(form.value).subscribe( res => {
        this.resetForm(form);
      });
    }
    

    pass: string = "password";
    verPass(){
      if(this.pass == "password")
      this.pass = "text";
      else
      this.ocultarPass();
    }
    ocultarPass(){
    this.pass = "password";
    }

  
  }
  