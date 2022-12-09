import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users(){
    return [
      {name:'Animesh Singh',age:32 , email:'animesh.singh170@gmail.com'},
      {name:'Anil Sikh',age:23 , email:'anil.sh10@gmail.com'},
      {name:'andrew Solemon',age:19 , email:'andrSole@gmail.com'},
    ]
  }
}
  