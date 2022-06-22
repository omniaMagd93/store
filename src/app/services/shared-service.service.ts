import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  public orderData: order;
  constructor() { }

  setOrderData(data: any) {
    this.orderData= data
 }

 getOrderData(): Observable<any> {

  return of (this.orderData);

}
}
