import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent extends BaseComponent implements OnInit {

  title: string = 'Request-Detail';
  request: Request;
  id: number;

  constructor(private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute) {
      super();
     }

  ngOnInit() {
    //get request id from the url call service to populate request property
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request});

      
  }

  delete() {
    this.requestSvc.delete(this.id).subscribe(jr => {
      console.log("request delete jr:",jr);
      // Sean owes fix here to jr.  we will assume delete was successful
      if (jr.errors != null) {
        console.log("Error deleting request: "+jr.errors);
      }
      this.router.navigateByUrl("request/list");
    });
  }

}
