import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email;
  Password;
  constructor(private userService:UserService,private route : Router) { }

  ngOnInit() {
  }
   sendDetails()
   {
      this.userService.setEmail(this.Email);
      this.userService.setPassword(this.Password);
      this.route.navigate(['profile']);
   }
}
