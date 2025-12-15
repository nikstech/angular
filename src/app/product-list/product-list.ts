import { Component } from '@angular/core';
import { Search } from './search/search';

@Component({
  selector: 'app-product-list',
  imports: [Search],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  addToCart = "Add to Cart";
  product = {
    name: "iPhone 14 Pro Max",
    price: 79999,
    color: "Silver",
    discountedPrice: 8.5,
    inStock: "Item left",
    pImage: '/assets/images/iphone.png'
  }
}
