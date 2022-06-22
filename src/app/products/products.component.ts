import { Component, OnInit } from '@angular/core';
import { product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: product[] = []
  
  constructor(public productsService: ProductsService) {}
  
  
  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe((response: product[])=>{
      this.products = response;
    });
  }

}
