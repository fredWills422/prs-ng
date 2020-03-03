import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { SystemService } from 'src/app/service/system.service';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.css']
})
export class UserLoginComponent extends BaseComponent implements OnInit {

  message: any;
  user:User = new User();
  
  constructor(private userSvc: UserService, 
              protected sysSvc: SystemService,
              private router: Router
  ) { 
    super(sysSvc);
  }
    
  ngOnInit() {
    // defaulting uname and pwd for testing purposes
    this.user.userName = "sat";
    this.user.password = "sa";

    // initialize system user to null
    this.sysSvc.loggedInUser = null;
  }
    
  login(){

    console.log("login called for user: ", this.user);

    this.userSvc.login(this.user).subscribe(jr => {

      console.log("jr:", jr);

      if(jr.errors == null){
          
        if(jr.data == null){
          //no error but still no user
          this.message = "Invalid UserName/Password combo. Retry";

        }else{
          // should be good to go
          this.user= jr.data as User;
          this.sysSvc.loggedInUser = this.user;
          this.sysSvc.data.user.instance = this.user;
          this.sysSvc.data.user.loggedIn = true;
          this.router.navigateByUrl('/user/list');

        }

      }
      else{
        this.message = jr.errors;
      }

    })

  }

}
