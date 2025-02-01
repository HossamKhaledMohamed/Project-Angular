import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  moviesm:any[]=[];
  constructor(_UserService:UserService) {
  this.moviesm= _UserService.arryForObject

  }


  ngOnInit(): void {
  }

}
