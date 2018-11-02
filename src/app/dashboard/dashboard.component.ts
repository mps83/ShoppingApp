import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DataserviceService } from '../service/dataservice.service';
import { async } from '@angular/core/testing';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnDestroy {
  cartItems: any = [];
  subscription: Subscription;
  constructor(private data: DataserviceService) {
    this.subscription = this.data.getMessage().subscribe(message => { this.cartItems.push(message); });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
