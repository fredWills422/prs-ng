import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Request } from 'src/app/model/request.class';
import { User } from 'src/app/model/user.class';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent extends BaseComponent implements OnInit {

  title: string = 'Request-Create';
  submitBtnTitle: string ='Create';
  request: Request = new Request();
  
  constructor(private requestSvc: RequestService,
              private router: Router,
              private location: Location,
              protected sysSvc: SystemService) { 
                super(sysSvc);
  }

  ngOnInit() {

    super.ngOnInit();

    this.request.user = this.loggedInUser;
    
  }


  save(){
    this.requestSvc.create(this.request).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error creating request: "+errs);
      }
      this.router.navigateByUrl('/request/list');
    });
  }

  backClicked(){
    this.location.back();
  }

}
