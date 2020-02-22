import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { User } from 'src/app/model/user.class';
import { LineItem } from 'src/app/model/line-item.class';
import { Vendor } from 'src/app/model/vendor.class';
import { Product } from 'src/app/model/product.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { VendorService } from 'src/app/service/vendor.service';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent extends BaseComponent implements OnInit {

  title: string = 'lineItem-Create';
  submitBtnTitle: string ='Create';
  user:User;
  lineItem: LineItem = new LineItem();
  vendors: Vendor[]=[];
  products: Product[]=[];
  
  constructor(private lineItemSvc: LineItemService,
              private vendorSvc: VendorService,
              private productSvc: ProductService,
              private router: Router,
              private location: Location,
              protected sysSvc: SystemService) { 
                super(sysSvc);
  }

  ngOnInit() {

    super.ngOnInit();

    this.user = this.loggedInUser;

    //populate vendors
    this.vendorSvc.list().subscribe(
      jr => {
        this.vendors = jr.data as Vendor[];
        console.log(this.vendors);
      }
    );

    //populate products
    this.productSvc.list().subscribe(
      jr => {
        this.products = jr.data as Product[];
        console.log(this.products);
      }
    );

  }


  save(){
    this.lineItemSvc.create(this.lineItem).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error creating lineItem: "+errs);
      }
      this.router.navigateByUrl('/request/list');
    });
  }
}
