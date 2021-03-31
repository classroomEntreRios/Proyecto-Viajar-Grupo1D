import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import {LoginPanelComponent} from '../loginpanel/loginpanel.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombreUsuario : string = "Iniciar Sesión";
  constructor() { }

  ngOnInit(): void {
  }


}