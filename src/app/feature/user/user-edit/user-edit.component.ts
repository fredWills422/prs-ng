import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: '../user-maint-shared/user-maint.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent extends BaseComponent implements OnInit {

  title: string = 'User-Edit';
  submitBtnTitle: string ='Save';
  user: User = new User();
  id: number = 0;

  constructor(private userSvc: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              protected sysSvc: SystemService) { 
                super(sysSvc);
  }

  ngOnInit() {

    super.ngOnInit();

    //get user id from the url call service to populate user property
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.userSvc.get(this.id).subscribe(jr => {
      this.user = jr.data as User});
  }

  save(){
    this.userSvc.edit(this.user).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error editing user: "+errs);
      }
      this.router.navigateByUrl('/user/list');
    });
  }

  backClicked(){
    this.location.back();
  }

}
