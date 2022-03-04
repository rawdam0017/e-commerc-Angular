import { Component, OnInit } from '@angular/core';
// import cardList from '../../assets/data.json';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  Details: any;
  constructor(private activatedRoute: ActivatedRoute, private CartService: CartService) {
    // const activeID = this.activatedRoute.snapshot.params['id']
    // this.Details = cardList.find(pro => pro.id == activeID);
    // console.log(this.Details)
  }
  ngOnInit(): void {
    const activeID = this.activatedRoute.snapshot.params['id']
    this.CartService.getProductDetails(activeID).subscribe(
      (res) => {
        this.Details = res
        console.log(res)
      }

      // (err) => { console.log(err)
    )
  }
}


