import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private counter = new BehaviorSubject(0);
  private itemCount = new BehaviorSubject(1);
  private products = new BehaviorSubject([]);
  cartItems: any[] = [];

  // itemCount = this.counter.asObservable()
  // cartItems: product[] = [];
  // buyItems: product[] = [];


  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get('https://fakestoreapi.com/products')
  }

  getProductDetails(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

  getCounterValue() {
    return this.counter;
  }

  setCounterValue(newCounterVal: number) {
    this.itemCount.next(newCounterVal);
  }

  setproduct(newPro: any) {
    this.products.next(newPro)
  }
  getproduct(){
    return this.products;
  }


  addToCart(newCounterVal: number) {
    // this.cartItems.push(product);
    this.counter.next(newCounterVal);
  }

  remove() {
    this.http.delete('https://fakestoreapi.com/products/id')
  }

  getItems() {
    return this.products;
  }


}
