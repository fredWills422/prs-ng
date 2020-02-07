import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: '../vendor-maint-shared/vendor-maint.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  title: string = 'Vendor-Create';
  submitBtnTitle: string ='Create';
  vendor: Vendor = new Vendor();
  constructor(private vendorSvc: VendorService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    //do nothing (no need to initialize this page)
  }

  save(){
    this.vendorSvc.create(this.vendor).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error creating vendor: "+errs);
      }
      this.router.navigateByUrl('/vendor/list');
    });
  }

  backClicked(){
    this.location.back();
  }

}
