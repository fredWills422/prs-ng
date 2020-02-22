import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { User } from 'src/app/model/user.class';
import { Request } from 'src/app/model/request.class';
import { LineItem } from 'src/app/model/line-item.class';
import { Product } from 'src/app/model/product.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { RequestService } from 'src/app/service/request.service';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { Vendor } from 'src/app/model/vendor.class';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent extends BaseComponent implements OnInit {

  title: string = 'Request-LineItem-Edit';
  submitBtnTitle: string ='Change';
  user:User;
  id:number;
  request:Request = new Request();
  lineItem: LineItem = new LineItem();
  product:Product = new Product();
  vendor: Vendor[]=[];
  
  
  constructor(private lineItemSvc: LineItemService,
              private requestSvc: RequestService,
              private productSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              protected sysSvc: SystemService) { 
                super(sysSvc);
  }

  ngOnInit() {

    super.ngOnInit();

    this.user = this.loggedInUser;
    
      
    //populate products
    
        
    //get lineItem id from the url call service to populate id property
    this.route.params.subscribe(parms => this.id = parms['id']);
      this.lineItemSvc.get(this.id).subscribe(jr => {
        this.lineItem = jr.data as LineItem;
        this.request = this.lineItem.request;
        this.product = this.lineItem.product;
    });
        
  }


  save(){
    
    console.log("saving li-", this.lineItem);
    this.lineItemSvc.edit(this.lineItem).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error creating lineItem: "+errs);
      }
      this.router.navigateByUrl('/request/lines/'+this.lineItem.request.id);
    });

  }

  delete() {
    this.lineItemSvc.delete(this.lineItem.id).subscribe(jr => {
      console.log("lineItem delete jr:",jr);
      // Sean owes fix here to jr.  we will assume delete was successful
      if (jr.errors != null) {
        console.log("Error deleting product: "+jr.errors);
      }
      this.router.navigateByUrl("request/lines");
    });
  }

}
