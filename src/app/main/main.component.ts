import { Component,OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  Movie:any={}
  movieName:string=''
  value:any={}
  constructor(private api:ApiService){}
  ngOnInit(): void {
    SampleCard();
  //  this.GetallMovies();
  }
  GetallMovies(mName:string=''){
    this.api.allMovies(mName)
    // .subscribe({
    //   next(num:any){
    //     console.log('this is result',num);
    //     =num
        
    //   },error(err){console.log("Not found",err)}

    // })
  
   
    .subscribe((data:any)=>{
      console.log(data);
      this.Movie=data
      console.log(this.Movie.DVD);
      
      
    },(error:any)=>{
      console.log(error.Error);
      
    
     
    })
  }

}
function SampleCard() {
  
}

