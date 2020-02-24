import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { BaseComponent } from 'src/app/base/base.component';
import { SystemService } from 'src/app/service/system.service';
import { LineItemService } from 'src/app/service/line-item.service';
import { Request } from 'src/app/model/request.class';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})

export class RequestLinesComponent extends BaseComponent implements OnInit {
  
  title: string = 'Request-lines';
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

  submitForReview(){
    this.requestSvc.submitForReview(this.request).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error editing request: "+errs);
      }
      this.router.navigateByUrl('/request/list');
    });
  }

  delete(id:number) {  
    this.lineItemSvc.delete(this.linesForRequest[id].id).subscribe(
      jr => {
        console.log("lineItem delete jr:",jr);
        if (jr.errors != null) {
          console.log("Error deleting user: "+jr.errors);
        }
        this.linesForRequest.splice(id,1);
        this.router.navigateByUrl("request/lines/{{linesForRequest[id].id}}");
      }
    );
  }

}
