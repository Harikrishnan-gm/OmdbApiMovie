import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http:HttpClient) { }
  // api call to get searched movie
  allMovies(mName:any){
    return this.http.get(`https://www.omdbapi.com/?t=${mName}&apikey=56954f39`)
  }
  getMovie(name:any){
    return this.http.get(`https://www.omdbapi.com/?t=${name}&apikey=56954f39`)
  }
}
