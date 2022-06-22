import { Component, OnInit ,Input} from '@angular/core';
import { product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: product;
  constructor(public productsService: ProductsService,private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    const productId: number = this.route.snapshot.params['id'];

  this.productsService.getProductById(productId)
  .subscribe((response: product)=>{
    this.product = response;
  });


  }

  increaseQuantity(product)
  {
    product.quantity++;
  }

  decreaseQuantity(product)
  {
    if(product.quantity != 1)
        product.quantity--;
  }

  addToCart(product)
  {
    localStorage.setItem(product.id,JSON.stringify(product));
  }




}
