import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  title: string = 'user-list'

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.list().subscribe(
      jr => {
        this.users = jr.data as User[];
        console.log(this.users);
      }
    );
  }

}
