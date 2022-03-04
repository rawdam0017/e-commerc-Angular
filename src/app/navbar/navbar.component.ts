import { Component, OnInit } from '@angular/core';
import { CartService } from './../services/cart.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  brand: string = 'products';
  Register: string = 'Register';
  Login: string = 'Login';
  counter: Observable<number> = of(0);


  constructor(private CartService: CartService) { }

  ngOnInit(): void {
    this.counter = this.CartService.getCounterValue();

  }



}
