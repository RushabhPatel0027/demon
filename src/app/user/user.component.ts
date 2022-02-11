import { Component, OnInit } from '@angular/core';
import { IData } from '../Interface/user-list';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userDetails: IData[] = [];

  constructor() { }

  ngOnInit(): void {
    this.userDetails = [
      { "name": "Rushabh", "password": "Rushabh", },
      { "name": "Prince", "password": "Prince" },
      { "name": "Deep", "password": "Deep" },
      { "name": "Giri", "password": "Giri123" }
    ];
    const userName = sessionStorage.getItem("userName");
    const pwd = sessionStorage.getItem("password");
    if (userName != 'Admin' && pwd != 'Admin') {
      let filterList: IData[] = this.userDetails.filter(x => x.name == userName && x.password == pwd);
      this.userDetails = filterList;
    }
  }
}







// username == Admin => whole list
// usernaem != admin => perticular user info
// username != password => No Data Found