import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: User;
  menuItems: MenuItem[];

  constructor(private sysSvc: SystemService,
              private router: Router) { }

  ngOnInit() {
    this.menuItems=[
      new MenuItem("User", "/user/list", "user list"),
      new MenuItem("Product", "/product/list", "product list"),
      new MenuItem("Vendor", "/vendor/list", "vendor list"),
      new MenuItem("Request", "/request/list", "request list")
    ]
    if(this.sysSvc.data.user.loggedIn){
      this.user = this.sysSvc.data.user.instance;
    }
  }

}
