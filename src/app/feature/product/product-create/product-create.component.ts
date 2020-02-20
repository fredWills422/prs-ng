import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/service/vendor.service';
import { Vendor } from 'src/app/model/vendor.class';
import { BaseComponent } from 'src/app/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent extends BaseComponent implements OnInit {

  title: string = 'Product-Create';
  submitBtnTitle: string ='Create';
  product: Product = new Product();
  vendors: Vendor[]=[];
  
  constructor(private productSvc: ProductService,
              private vendorSvc: VendorService,
              private router: Router,
              private location: Location,
              protected sysSvc: SystemService) { 
                super(sysSvc);
  }

  ngOnInit() {

    super.ngOnInit();

    //populate vendors
    this.vendorSvc.list().subscribe(
      jr => {
        this.vendors = jr.data as Vendor[];
        console.log(this.vendors);
      }
    );
  }


  save(){
    this.productSvc.create(this.product).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error creating product: "+errs);
      }
      this.router.navigateByUrl('/product/list');
    });
  }

  backClicked(){
    this.location.back();
  }

}
