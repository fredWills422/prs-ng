import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    
    this.menuItems=[
      new MenuItem("User", "/user/list", "User list"),
      new MenuItem("Product", "/product/list", "Product list"),
      new MenuItem("Vendor", "/vendor/list", "Vendor list"),
      new MenuItem("Request", "/request/list", "request list"),
    ]
  }

}
