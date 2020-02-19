import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent extends BaseComponent implements OnInit {

  vendors: Vendor[];
  title: string = 'Vendor-list'

  constructor(private vendorSvc: VendorService,
              protected sysSvc: SystemService) {
    super(sysSvc);
  }

  ngOnInit() {

    super.ngOnInit();

    this.vendorSvc.list().subscribe(
      jr => {
        this.vendors = jr.data as Vendor[];
        console.log(this.vendors);
      }
    );

  }

}
