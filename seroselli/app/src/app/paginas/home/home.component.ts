import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  power: string;
  constructor(private login : LoginService) { }

  ngOnInit(): void {
  }

  update(){
   if(this.login.havePower()==true){
    this.power = "ADMIN"
   } 
   else{
     this.power = "USER"
   }
  }
}
