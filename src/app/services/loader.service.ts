import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loader= new BehaviorSubject(true);


  getLoader(){
    return this.loader;
  }
   
  hide(){
    this.loader.next(false)

  }
  constructor() { }
}
