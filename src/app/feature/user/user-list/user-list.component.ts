import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { BaseComponent } from 'src/app/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends BaseComponent implements OnInit {

  user:User;
  users: User[];
  title: string = 'User-list'

  constructor(private userSvc: UserService,
              protected sysSvc: SystemService) {
    super(sysSvc);
   }

  ngOnInit() {
    super.ngOnInit();
    console.log("User List - verify we have a logged in user! ")
    
    this.userSvc.list().subscribe(
      jr => {
        this.users = jr.data as User[];
        console.log(this.users);
      }

    );
    


  }



}
