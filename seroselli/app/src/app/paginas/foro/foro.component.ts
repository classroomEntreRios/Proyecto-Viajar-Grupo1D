import { ForumService } from './../../services/forum.service';
import { Foro, subForo } from './../../models/foro.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {


foros : Foro[];
comments : subForo[];
  constructor(private forum : ForumService) { }

  ngOnInit(): void {
  this.forum.getForos().subscribe(data =>{
    this.foros = data;
  });
  this.forum
  }

  

}
