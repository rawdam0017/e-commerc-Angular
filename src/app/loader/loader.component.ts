import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  loader = true
  constructor(private LoaderService: LoaderService) {
    
   }

  ngOnInit(): void {
    this.LoaderService.getLoader().subscribe(
      res => this.loader=res
    )
  }

}
