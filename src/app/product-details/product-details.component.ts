import { Component, OnInit } from '@angular/core';
import cardList from '../../assets/data.json';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  Details : any ;
  constructor(private activatedRoute : ActivatedRoute) {
    const activeID = this.activatedRoute.snapshot.params['id']
    this.Details = cardList.find(pro => pro.id == activeID);
    console.log(this.Details)
  }
  ngOnInit(): void {
  }

}
