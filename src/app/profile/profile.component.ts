import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    Username:string;
    leftButton:boolean=false;
    rightButton:boolean=false;
  constructor(private userService:UserService,private router:Router) { }

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
