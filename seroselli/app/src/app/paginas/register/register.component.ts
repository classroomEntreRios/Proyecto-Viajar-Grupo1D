import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../../services/usuarios.service';
import { FormControl, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
    pass: string = "password";
    constructor(public service :  UsuariosService) { }
  
    ngOnInit(): void {
      this.resetForm();
      
    }
    resetForm(form?:NgForm) {
      if(form!=null){
        form.resetForm();
      }
  
      this.service.formData ={
        nombre :  '',
        apellido : '',
        uemail : '',
        epassword : ''
      }
  
  
    }
    onSubmit(form:NgForm){
      this.insertRecord(form);
    }
    insertRecord(form:NgForm){
      this.service.postUsuario(form.value).subscribe( res => {
        this.resetForm(form);
      });
    }
    
  
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
  