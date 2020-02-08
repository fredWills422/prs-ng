import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from 'src/app/model/product.class';
import { Vendor } from 'src/app/model/vendor.class';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: '../product-maint-shared/product-maint.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  title: string = 'Product-Edit';
  submitBtnTitle: string ='Save';
  product: Product = new Product();
  vendors: Vendor[]=[];
  id: number = 0;

  constructor(private productSvc: ProductService,
              private vendorSvc: VendorService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    //get product id from the url call service to populate product property
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.productSvc.get(this.id).subscribe(jr => {
      this.product = jr.data as Product;
    });
    
    //populate vendors
    this.vendorSvc.list().subscribe(
      jr => {
        this.vendors = jr.data as Vendor[];
        console.log(this.vendors);
      }
    );
    
  }

  save(){
    this.productSvc.edit(this.product).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error editing product: "+errs);
      }
      this.router.navigateByUrl('/product/list');
    });
  }

  compVendor(a: Vendor, b: Vendor): boolean {
    return a && b && a.id === b.id;
  }

  backClicked(){
    this.location.back();
  }

}
