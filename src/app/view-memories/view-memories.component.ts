import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { pipe, Subscription } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { ApiServiceService } from '../api-service.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-view-memories',
  templateUrl: './view-memories.component.html',
  styleUrls: ['./view-memories.component.css'],
})
export class ViewMemoriesComponent implements OnInit {
  Categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Fashion Wear' },
    { id: 3, name: 'Beauty Products' },
    { id: 4, name: 'Kitchen Appliances' },
    { id: 5, name: 'Books' },
    { id: 6, name: 'Rentals' }];
  selectedCategory: any;
  showData = false;
  itemList: any = [];
  cartItems: any = [];
  totalItems: any;
  totalPrice: Number = 0;
  constructor(private apiService: ApiServiceService, private data: DataserviceService) { }

  chooseCategory(category: any) {
    this.showData = true;
    this.selectedCategory = category;
    this.apiService.get(`/api/items/category/${category.name}`).subscribe((res) => {
      console.table(res);
      this.itemList = res;
    });
  }

  addToCart(data: any) {
    this.cartItems.push(data);
    this.totalItems = this.cartItems.length;
    return this.cartItems.forEach(element => {
      this.totalPrice = this.totalPrice + element.price;
    });
  }

  ngOnInit() {
  }
}
