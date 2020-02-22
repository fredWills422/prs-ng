import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { User } from 'src/app/model/user.class';
import { LineItem } from 'src/app/model/line-item.class';
import { Request } from 'src/app/model/request.class';
import { Product } from 'src/app/model/product.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { RequestService } from 'src/app/service/request.service';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SystemService } from 'src/app/service/system.service';
import { VendorService } from 'src/app/service/vendor.service';
import { Vendor } from 'src/app/model/vendor.class';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})

export class LineItemCreateComponent extends BaseComponent implements OnInit {

  title: string = 'Request-LineItem-Create';
  submitBtnTitle: string ='Create';
  user:User;
  request: Request= new Request();
  lineItem: LineItem = new LineItem();
  requests: Request[]=[];
  products: Product[]=[];
  vendors: Vendor[]=[];
  requestId:number=0;
  
  constructor(private lineItemSvc: LineItemService,
              private requestSvc: RequestService,
              private productSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              protected sysSvc: SystemService) { 
                super(sysSvc);
  }

  ngOnInit() {

    super.ngOnInit();

    this.user = this.loggedInUser;
      
    //populate products
    this.productSvc.list().subscribe(
      jr => {
        this.products = jr.data as Product[];
        console.log(this.products);
    });
        
    //get request id from the url call service to populate requestId property
    this.route.params.subscribe(parms => this.requestId = parms['id']);
      this.requestSvc.get(this.requestId).subscribe(jr => {
        this.request = jr.data as Request;
        this.lineItem.request=this.request;
    });
        
  }


  save(){
    
    console.log("saving li-", this.lineItem);
    this.lineItemSvc.create(this.lineItem).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error creating lineItem: "+errs);
      }
      this.router.navigateByUrl('/request/lines/'+this.lineItem.request.id);
    });

  }
  
}
