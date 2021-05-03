import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.Service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-perfilpanel',
  templateUrl: './perfilpanel.component.html',
  styleUrls: ['./perfilpanel.component.css']
})
export class PerfilpanelComponent implements OnInit {

  @Output() usuarioLogueado = new EventEmitter<string>();
  @Output() cerrarPerfil = new EventEmitter<boolean>();
  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  modificarPerfil(){
    this.cerrarPerfil.emit();
    this.router.navigate(['/perfil']);
  }

    cerrarSesion(){
      this.auth.borrarSessionStorage();
      this.auth.borrarLocalStorage();
      this.usuarioLogueado.emit("closed");
      };

}
