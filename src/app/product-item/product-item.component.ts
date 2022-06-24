import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NotificationMessagesComponent } from '../notification-messages/notification-messages.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product;
  durationInSeconds = 5;

  cardClass: string; 
  cardContentClass: string;
  currentURL: string;


  constructor(public router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.currentURL = this.router.url;
    
    if(this.currentURL== "/")
    {
      this.cardClass = "product-card"
      this.cardContentClass = "product-content"
    }
    else
    {
      this.cardClass = "product-card-item"
      this.cardContentClass = "product-content-item"
    }
   
  }

  increaseQuantity(product)
  {
    product.quantity++;
  }

  decreaseQuantity(product)
  {
    if(product.quantity < 1)
        product.quantity--;
  }

  addToCart(product)
  {
    this._snackBar.openFromComponent(NotificationMessagesComponent, {
      duration: this.durationInSeconds * 1000,
    });
    localStorage.setItem(product.id,JSON.stringify(product));
  }

}
