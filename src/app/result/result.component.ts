import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  name:string=''
  Movie:any={}
  constructor(private resultActivatedRoute:ActivatedRoute,private api:ApiService){}
  ngOnInit(): void {
    
    this.resultActivatedRoute.params
    .subscribe((data:any)=>{
      console.log('hi',data.Title);
      this.name=data.Title

    })
    // call here for get movie details after get params
    this.movieDetails(this.name);

  }
  movieDetails(name:string){
    this.api.getMovie(name)
    .subscribe((data)=>{
      this.Movie=data
      console.log(this.Movie);
      

    })

    }
  }

