import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Request } from 'src/app/model/request.class';
import { User } from 'src/app/model/user.class';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent extends BaseComponent implements OnInit {

  title: string = 'Request-Edit';
  submitBtnTitle: string ='Save';
  request: Request = new Request();
  users: User[]=[];
  id: number = 0;

  constructor(private requestSvc: RequestService,
              private userSvc: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              protected sysSvc: SystemService) {
                super(sysSvc);
  }

  ngOnInit() {

    super.ngOnInit();

    //get request id from the url call service to populate request property
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;
    });
    
    //populate users
    this.userSvc.list().subscribe(
      jr => {
        this.users = jr.data as User[];
        console.log(this.users);
      }
    );
    
  }

  save(){
    this.requestSvc.edit(this.request).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error editing request: "+errs);
      }
      this.router.navigateByUrl('/request/list');
    });
  }

  compUser(a: User, b: User): boolean {
    return a && b && a.id === b.id;
  }

  backClicked(){
    this.location.back();
  }

}
