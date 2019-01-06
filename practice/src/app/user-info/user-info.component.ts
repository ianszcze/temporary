import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Users } from '../mock-users';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  users: User[];
  user: User;

  load(){
    if (document.getElementById("thisButton").textContent === "Show"){
        this.users = Users;
        document.getElementById("thisButton").textContent = "Hide";
    }
    else {
      this.users = null;
      document.getElementById("thisButton").textContent = "Show";
    }
  }

}
