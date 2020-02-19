import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { BaseComponent } from 'src/app/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent extends BaseComponent implements OnInit {

  requests: Request[];
  title: string = 'Request-list'

  constructor(private requestSvc: RequestService,
              protected sysSvc: SystemService) {
    super(sysSvc);
   }

  ngOnInit() {

    super.ngOnInit();
    
    this.requestSvc.list().subscribe(
      jr => {
        this.requests = jr.data as Request[];
        console.log(this.requests);
      }
    );
  }

}
