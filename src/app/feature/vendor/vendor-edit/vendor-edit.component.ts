import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: '../vendor-maint-shared/vendor-maint.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent extends BaseComponent implements OnInit {

  title: string = 'Vendor-Edit';
  submitBtnTitle: string ='Save';
  vendor: Vendor = new Vendor();
  id: number = 0;

  constructor(private vendorSvc: VendorService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              protected sysSvc: SystemService) {
                super(sysSvc);
  }

  ngOnInit() {
    
    super.ngOnInit();

    //get vendor id from the url call service to populate vendor property
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.vendorSvc.get(this.id).subscribe(jr => {
      this.vendor = jr.data as Vendor});
  }

  save(){
    this.vendorSvc.edit(this.vendor).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error editing vendor: "+errs);
      }
      this.router.navigateByUrl('/vendor/list');
    });
  }

  backClicked(){
    this.location.back();
  }

}
