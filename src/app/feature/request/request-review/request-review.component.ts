import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { User } from 'src/app/model/user.class';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent extends BaseComponent implements OnInit {

  
  title: string = 'Request-review';

  user:User;
  requests:Request[] = [];

  constructor(private requestSvc: RequestService,
              protected sysSvc: SystemService) {
    super(sysSvc);
  }

  ngOnInit() {

    super.ngOnInit();
    
    this.user=this.loggedInUser
    
    this.requestSvc.listForReviewNotThisUser(this.user.id).subscribe(
      jr => {
        this.requests = jr.data as Request[];
        console.log(this.requests);
      }
    );

  }

}
