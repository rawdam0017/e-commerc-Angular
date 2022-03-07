import { Component, OnInit } from '@angular/core';
// import { product } from '../interfaces/product';
import { CartService } from '../services/cart.service';
// import cardList from '../../assets/data.json';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: any;
  counter = 0;
  quantity = 0;
  sum = 0;
  // items = this.CartService.getItems();
  // itemCount = this.CartService.getCounterValue();
  //  flag: boolean = true


  constructor(private activatedRoute: ActivatedRoute, private CartService: CartService) {
  }

  ngOnInit(): void {
    this.CartService.getCounterValue().subscribe(
      (val) => (this.counter = val)
    );
    this.CartService.getproduct().subscribe(
      res => this.product = res
    )

    for (let item of this.product) {
      this.sum += item.price;
    }

  }

  increaseCounter() {
    // return(++this.quantity)

    return (++this.quantity)
  }
  decreaseCounter() {
    return (--this.quantity)
    // this.CartService.setCounterValue(--this.counter);
  }

  remove(item: any) {
    this.CartService.removeCartItem(item)
    // this.items.splice(this.items.indexOf(this.pro.id), 1);

  }
}
