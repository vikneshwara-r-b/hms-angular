import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email;
  Password;
  constructor(private userService:UserService,private route : Router,private messageService:MessagingService) { }

  ngOnInit() {
  }

  
  sendMessage(): void {
    // send message to subscribers via observable subject
    console.log("Sending message");
    this.messageService.sendMessage('Message from Login Component to Profile Component!');
}

clearMessages(): void {
    // clear messages
    console.log("Clearing messages");
    this.messageService.clearMessages();
}
   sendDetails()
   {
      this.userService.setEmail(this.Email);
      this.userService.setPassword(this.Password);
      this.route.navigate(['profile']);
   }
}
