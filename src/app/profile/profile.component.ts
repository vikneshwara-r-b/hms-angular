import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
    Username:string;
    leftButton:boolean=false;
    rightButton:boolean=false;
    messages: any[] = [];
    subscription: Subscription;
  constructor(private userService:UserService,private router:Router) {
 console.log("Inside profile constructor");
   }

  ngOnInit() {
    this.Username = this.userService.getEmail();
    console.log(this.Username);
  }
  
  leftClicked()
  {
     this.leftButton=true;
     this.rightButton=false;
     this.router.navigate(['profile/patients']);
  }

  rightClicked()
  {
    this.leftButton=false;
     this.rightButton=true;
     this.router.navigate(['profile/doctors']);
  }
}
