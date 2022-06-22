import { Component, OnInit } from '@angular/core';
import { order } from '../models/order';
import { SharedServiceService } from '../services/shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  order: order
  constructor(public sharedService: SharedServiceService,public router: Router) { }

 
  ngOnInit(): void {
    this.sharedService.getOrderData().subscribe(data => {
      this.order = data
  });
  if(!this.order)
  {
    this.router.navigate(['/']);
  }
  }

}
