import { Component, OnInit } from '@angular/core';
// import cardList from '../../assets/data.json';
// import { product } from '../interfaces/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // products: product[] = cardList
  products: any
  constructor(private CartService: CartService) { }

  ngOnInit(): void {
    this.CartService.getProductList().subscribe(
      (res) =>{
        this.products = res
        console.log(res)
        
      },
      (err) => { console.log(err) }

    )
  }
}


