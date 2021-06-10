import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data: any = {};
  detail: any = {};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.click();
  }

click() {
  this.userService.getUserListService()
  .subscribe(
    (data) => { this.data = data},
    (error) => {}
  );

  this.userService.getDetailListService()
  .subscribe(
    (data) => { this.detail = data},
    (error) => {}
  )
}

}
