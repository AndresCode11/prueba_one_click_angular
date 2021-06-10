import { Component, ViewChild } from '@angular/core';
import { UserService } from './services/userService/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaAngular';
  userList: any = [];

  constructor(private userService: UserService) {
      this.userService.getUserListService()
      .subscribe(
        (data) => {this.userList = data},
        (error) => {}
      );
  }

  click() {
    this.userService.getUserListService()
    .subscribe(
      (data) => {},
      (error) => {}
    );
  }
  
}

