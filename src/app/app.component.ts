import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from './service/user-data.service';
import { ApiDataService } from './service/api-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private userData: UserDataService, private ApiData:ApiDataService) {
    ApiData.user().subscribe((data)=>{ 
      this.pokemons = [data]
      console.log(data,"data")
    })

    console.warn('userdata', userData.users());
    this.users = userData.users();
  }
  getUserFormData(data:any){
console.warn(data)
  }
  title = 'mytwo';
  users:any;
  pokemons:any;
  data = 'x';
  today = Date();
  name: any;
  lgForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  get user() {
    //validations
    return this.lgForm.get('user');
  }
  get password() {
    //validations
    return this.lgForm.get('password');
  }
  lgForm1() {
    console.warn(this.lgForm.value);
  }
  userLogin(item: any) {
    console.warn(item);
  }
  userDetails = [
    { name: 'Animesh Singh', email: 'animesh.singh170199@gmail.com' },
    { name: 'Pem Das', email: 'Pemdas019@gmail.com' },
    { name: 'Ajay Singh', email: 'ajayu0@gmail.com' },
  ];
  updateData(item: string) {
    this.data = item;
    console.warn(item);
  }
  getVal(item: HTMLInputElement) {
    console.warn(item);
  }
}
