import { Component, OnInit } from '@angular/core';
import cardList from '../../assets/data.json';
import { product } from '../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: product[] = cardList
  constructor() { }

  ngOnInit(): void {
  }

}
