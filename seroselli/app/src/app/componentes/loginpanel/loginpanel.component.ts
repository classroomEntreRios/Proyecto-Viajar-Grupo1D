import { Usuario } from './../../models/usuario.model';
import { NavbarComponent } from './../navbar/navbar.component';
import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
 
@Component({
  selector: 'app-login-panel',
  templateUrl: './loginpanel.component.html',
  styleUrls: ['./loginpanel.component.css']
})
export class LoginPanelComponent implements OnInit {

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
  logged : string = "oculto";

  public  logeo(){
if(this.logged=="oculto"){
  this.logged="visible";
}
  }


}
