import { CartService } from './cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  title = "List of items";
  items;

  constructor(service: CartService){
    this.items = service.getItems();
  }
}
