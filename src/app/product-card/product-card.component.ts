import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';


// import { product  } from '../interfaces/product';
// import cardList from '../../assets/data.json';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() cardItem: any;
  itemList: any = []
  product: any;
  counter = 0;


  constructor(private router: Router, private route: ActivatedRoute, private CartService: CartService) {
    this.CartService.getCounterValue().subscribe(
      (val) => (this.counter = val)
    );
  }

  ngOnInit(): void {
    const activeID = this.route.snapshot.params['id']
    this.CartService.getProductDetails(activeID).subscribe(
      (res) => {
        this.product = res
        console.log(res)
      }
      // (err) => { console.log(err)
    )
    this.CartService.getproduct().subscribe(
      res => this.itemList = res
    )

  }


  showDetails() {
    this.router.navigate(['/product-detailes', this.cardItem.id])
  }


  // increaseCounter() {
  //   this.CartService.setCounterValue(++this.counter);
  // }
  // decreaseCounter() {
  //   this.CartService.setCounterValue(--this.counter);
  // }

  addToCart() {
    this.itemList.push(this.cardItem)
    console.log(this.itemList)
    this.CartService.setproduct(this.itemList)

    this.CartService.addToCart(++this.counter);
    // this.router.navigate(['/cart'])
  }

}
