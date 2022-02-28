import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { product } from '../interfaces/product';
// import cardList from '../../assets/data.json';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() cardItem: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showDetails() {
    this.router.navigate(['/product-detailes' , this.cardItem.id])
  }

}
