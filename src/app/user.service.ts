import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    email:string;
    password:string;
  constructor() { }
    setEmail(email)
    {
      this.email= email;
    }
    setPassword(password)
    {
      this.password=password;
    }
   getPassword(){
     return this.password;
   }
    getEmail(){
      return this.email;
    }
}
