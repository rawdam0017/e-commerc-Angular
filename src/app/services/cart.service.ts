import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { time } from 'console';
// import { product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private counter = new BehaviorSubject(0);
  private products = new BehaviorSubject<any>([]);
  cartItems: any = [];




  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get(' https://fakestoreapi.com/products/')

  }

  getProductDetails(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

  getCounterValue() {
    return this.counter;
  }

  // setCounterValue(newCounterVal: number) {
  //   this.counter.next(newCounterVal);
  // }

  setproduct(newPro: any) {
    this.products.next(newPro)
  }
  getproduct() {
    return this.products;
  }


  addToCart(newCounterVal: number) {
    this.counter.next(newCounterVal);
  }

  removeCartItem(product: any) {
    this.cartItems.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItems.splice(index, 1)
      }
    })
  }

  getItems() {
    return this.products;
  }


}
