import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  data: any = [];
  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    let formData = new FormData();
    formData.append('id', id);
    this.userService.getUserDetailService(formData)
    .subscribe(
      (data) => {this.data = data;},
      (error) => {}
    )
  }

}
