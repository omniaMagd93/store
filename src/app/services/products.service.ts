import { Injectable } from '@angular/core';
import { product } from '../models/product';
import {HttpClient} from '@angular/common/http';  
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) {}

  getAllProducts()
  {
    return this.http.get<product[]>('./assets/products.json');
  }

  getProductById(id: number)
  {
    const productsResponse = this.getAllProducts();
    return productsResponse
    .pipe(
      map(products => <product>products.find(pro => pro.id == id))
    );
  }
}
