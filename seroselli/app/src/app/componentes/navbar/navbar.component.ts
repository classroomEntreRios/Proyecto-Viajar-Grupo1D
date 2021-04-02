import { Logueado } from './../../models/usuario.model';
import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Input() usuarioNavbar : Logueado;


     constructor(public usuarioServ :  UsuariosService) {}
  
  ngOnInit(): void {
    
    this.usuarioServ.getUsuarioLog().subscribe(data => this.usuarioNavbar = data);

  } 
}


