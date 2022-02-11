import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IData } from '../Interface/user-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  username: string = "";
  pwd: string = "";
  warning: string = "";
  condition: Boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
  login() {

    let userDetails: IData[] = [
      { "name": "Rushabh", "password": "Rushabh" },
      { "name": "Prince", "password": "Prince" },
      { "name": "Deep", "password": "Deep" },
      { "name": "Giri", "password": "Giri" },
      { "name": "Admin", "password": "Admin" }
    ];

    var filterList = userDetails.filter((x) => {
      return x.name == this.username && x.password == this.pwd;
    });

    if (filterList.length == 0) {
      this.condition = false;
      this.warning = "";
    } else {
      this.condition = true;
      this.warning = this.username;
    }

    sessionStorage.setItem("userName", this.username);
    sessionStorage.setItem("password", this.pwd);

    

  }

}
