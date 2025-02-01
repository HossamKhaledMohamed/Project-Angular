import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  newsApi:any[]=[];
  constructor(private _NewsService:NewsService) { }

  getNewData(){
    this._NewsService.getNews().subscribe((data)=>{

      this.newsApi=data.articles;
    })
  }


  ngOnInit(): void {

   this.getNewData()
  }

}
