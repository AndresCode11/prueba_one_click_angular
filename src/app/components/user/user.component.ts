import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: any = [];
  userListSeach: any = [];
  searchForm: FormGroup;
  is_search = false;

  constructor(private formBuilder: FormBuilder, 
              private userService: UserService, 
              private router: Router) {
    this.userService.getUserListService()
    .subscribe(
      (data) => {this.userList = data},
      (error) => {}
    );
}
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      text: ['', Validators.required]
    })
  }

  redirect(id) {
    this.router.navigate(['/detail/' + id]);
  }

  search() {
    if(this.is_search) {
      this.is_search = false;
      this.searchForm.reset();
      this.userListSeach = [];
    }
    else {
      for (const iterator of this.userList) {
        if(iterator.consecutivo == (this.searchForm.controls.text.value).trim()) {
          this.userListSeach.push(iterator);
          console.log(this.userListSeach);
        }
      }
      if(this.userListSeach.length == 0) {
        alert('No hay Resultados para tu consulta');
        this.is_search = false;
      }
      else {
        this.is_search = true;

      }
      
    }
  }


}
