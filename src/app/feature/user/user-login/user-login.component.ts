import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { SystemService } from 'src/app/service/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  message: any;
  user:User = new User();
  
  constructor(private userSvc: UserService, 
              private sysSvc: SystemService,
              private router: Router
    ) { }
    
    ngOnInit() {
      this.user.userName = "sat";
      this.user.password = "sa";
    }
    
    login(){
      this.userSvc.login(this.user).subscribe(jr => {
        if(jr.errors == null){
          this.user= jr.data as User;
          this.sysSvc.data.user.instance = this.user;
          this.sysSvc.data.user.loggedIn = true;
          this.router.navigateByUrl('/user/list');
        }else{
          this.message = jr.errors;
        }
      })
    }
}
