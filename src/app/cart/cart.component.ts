import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { product } from '../models/product';
import { Router } from '@angular/router';
import { order } from '../models/order';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router: Router, public sharedService: SharedServiceService) { }

  userName: string =''
  address: string =''
  creditCard: string =''
  totalPrice: number = 0 
  itemsCounter: number= 0
  items: Array<product> = []
  orderObj: order
  productObj: product;
  userNameError: string;
  addressError: string;
  creditCardError: string;


  ngOnInit(): void {
    this.getCartProducts();
  }
  getCartProducts()
  {
    Object.keys(localStorage).forEach(data => 
      {
        this.items.push(JSON.parse(localStorage.getItem(data)))
        this.totalPrice += this.items[this.itemsCounter].price * this.items[this.itemsCounter].quantity
        this.itemsCounter++
      });
  }


  onSubmit(): void {
    localStorage.clear();
    this.orderObj = {
      userName: this.userName,
      address: this.address,
      creditCard: this.creditCard, 
      totalPrice: this.totalPrice
    }

    this.sharedService.setOrderData(this.orderObj)

    this.router.navigate(['/confirmation']);

  }

  removeProductFromCart(productObj)
  {
    localStorage.removeItem(productObj.id);
    location.reload();
  }

  increaseQuantity(productObj)
  {
    productObj.quantity++;

    let localStorageJsonData = JSON.parse(localStorage.getItem(productObj.id));
    localStorageJsonData.quantity = productObj.quantity;
    localStorage.setItem(productObj.id, JSON.stringify(localStorageJsonData));
    location.reload();
    
  }

  decreaseQuantity(productObj)
  {
    if(productObj.quantity < 1)
    {
      productObj.quantity--;

      let localStorageJsonData = JSON.parse(localStorage.getItem(productObj.id));
      localStorageJsonData.quantity = productObj.quantity;
      localStorage.setItem(productObj.id, JSON.stringify(localStorageJsonData));
      location.reload();
    }
      
    
  }

  userNameChange(userNamefield)
  {
   
    if(userNamefield.length < 3)
    {
      this.userNameError = "your user name must contain at least 3 characters."
    }
    else
    {
      this.userNameError =""
    }

  }

  addressChange(addressField)
  {
   
    if(addressField.length < 6)
    {
      this.addressError = "your address must contain at least 6 characters."
    }
    else
    {
      this.addressError =""
    }

  }

  creditCardChange(creditCardField)
  {
    if(creditCardField.length != 16)
    {
      this.creditCardError = "your credit card must 16 characters."
    }
    else
    {
      this.creditCardError =""
    }

  }

}
