import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pepole',
  templateUrl: './pepole.component.html',
  styleUrls: ['./pepole.component.css']
})
export class PepoleComponent implements OnInit {

  constructor() { }

  parentInfo:string='HOssam';
  reciveData:string='';
  reciveData2:string='';
  ngOnInit(): void {
  }

}
