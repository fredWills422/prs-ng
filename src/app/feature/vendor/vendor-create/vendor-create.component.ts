import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: '../vendor-maint-shared/vendor-maint.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent extends BaseComponent implements OnInit {

  title: string = 'Vendor-Create';
  submitBtnTitle: string ='Create';
  vendor: Vendor = new Vendor();

  constructor(private vendorSvc: VendorService,
              private router: Router,
              private location: Location,
              protected sysSvc: SystemService) { 
                super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
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
