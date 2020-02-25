import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { Request } from 'src/app/model/request.class';
import { LineItem } from 'src/app/model/line-item.class';
import { SystemService } from 'src/app/service/system.service';
import { LineItemService } from 'src/app/service/line-item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent extends BaseComponent implements OnInit {

  title: string = 'Request-approve/reject';
  user:User;
  requestId:number;
  request:Request = new Request();
  linesForRequest: LineItem[];
  lineItem:LineItem = new LineItem();
  
  constructor(protected sysSvc:SystemService,
              private lineItemSvc:LineItemService,
              private router:Router,
              private route:ActivatedRoute,
              private requestSvc:RequestService) {
    super(sysSvc);
  }

  ngOnInit() {

    super.ngOnInit();

    this.user = this.loggedInUser;

    //get request id from the url call service to populate request property
    this.route.params.subscribe(parms => this.requestId = parms['id']);
    
    this.requestSvc.get(this.requestId).subscribe(
      jr => {
        this.request = jr.data as Request;
      }
    );
    
    //populate linesForRequest
    this.lineItemSvc.linesForRequest(this.requestId).subscribe(
      jr => {
        this.linesForRequest = jr.data as LineItem[];
        console.log(this.linesForRequest);
      }
    );
    
  }

  approve(request:Request, id:number){
    this.requestSvc.approve(this.request, this.request.id).subscribe(
      jr => {
        let errs: string = jr.errors;
        if (errs!=null){
          console.log("Error approving request: "+errs);
        }
        this.router.navigateByUrl('/request/review');
      }
    )
  }
  
  reject(request:Request, id:number){
    this.requestSvc.reject(this.request, this.request.id).subscribe(
      jr => {
        let errs: string = jr.errors;
        if (errs!=null){
          console.log("Error approving request: "+errs);
        }
        this.router.navigateByUrl('/request/review');
      }
    )
  }

}
