import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent extends BaseComponent implements OnInit {

  title: string = 'Product-Detail';
  product: Product;
  id: number;

  constructor(private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    protected sysSvc: SystemService) {
      super(sysSvc);
     }

  ngOnInit() {
    //get product id from the url call service to populate product property
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.productSvc.get(this.id).subscribe(jr => {
      this.product = jr.data as Product});

      
  }

  delete() {
    this.productSvc.delete(this.id).subscribe(jr => {
      console.log("product delete jr:",jr);
      // Sean owes fix here to jr.  we will assume delete was successful
      if (jr.errors != null) {
        console.log("Error deleting product: "+jr.errors);
      }
      this.router.navigateByUrl("product/list");
    });
  }

}
