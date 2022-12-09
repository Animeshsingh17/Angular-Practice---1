import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  url ='https://pokeapi.co/api/v2/pokemon';
  constructor(private http:HttpClient) { }
  user(){
    return this.http.get(this.url)
  }
  getMoreData(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)  //Get Request 
  }
  saveUsers(data:any |null){
   return this.http.post(`wwww.localhost`,data);   // Post Request
  } 
}
