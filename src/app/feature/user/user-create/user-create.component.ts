import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BaseComponent } from 'src/app/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-user-create',
  templateUrl: '../user-maint-shared/user-maint.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent extends BaseComponent implements OnInit {

  title: string = 'User-Create';
  submitBtnTitle: string ='Create';
  user: User = new User();

  constructor(private userSvc: UserService,
              private router: Router,
              private location: Location,
              protected sysSvc: SystemService) {
                super(sysSvc);
  }

  ngOnInit() {
    
    super.ngOnInit();

  }

  save(){
    this.userSvc.create(this.user).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error creating user: "+errs);
      }
      this.router.navigateByUrl('/user/list');
    });
  }

  backClicked(){
    this.location.back();
  }

}
