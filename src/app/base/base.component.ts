import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.class';
import { SystemService } from '../service/system.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  sortColumn: string = 'id';
  ascOrder: boolean = true;

  loggedInUser: User = null;
  isAdmin: boolean;
  isReviewer: boolean;

  constructor(protected sysSvc: SystemService) { }

  ngOnInit() {
    // verify that the user is logged in
    this.sysSvc.checkLogin();
    // set the system user credentials in the current component
    this.loggedInUser = this.sysSvc.loggedInUser;
    this.isAdmin = this.sysSvc.isAdmin();
    this.isReviewer = this.sysSvc.isReviewer();
  }

  sort(column: string) : void {
    if (this.sortColumn === column){
      this.ascOrder = !this.ascOrder;
      return;
    }
    this.ascOrder = true;
    this.sortColumn = column;
  }

}
