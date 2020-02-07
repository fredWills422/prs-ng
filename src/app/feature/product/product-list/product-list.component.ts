import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends BaseComponent implements OnInit {

  products: Product[];
  title: string = 'Product-list'

  constructor(private productSvc: ProductService) {
    super();
   }

  ngOnInit() {
    this.productSvc.list().subscribe(
      jr => {
        this.products = jr.data as Product[];
        console.log(this.products);
      }
    );
  }

}
