import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Juices: any;
  other: any;

  constructor(private router: Router, private httpClient: HttpClient) { }
  products: any;


  ngOnInit() {
    if (this.router.url != '/') {
      let element = document.getElementById('start-screen');
      element.style.display = 'none';
      let element2 = document.getElementById('testimonials');
      element2.style.display = 'none';
    }
    this.httpClient.get("../../../../assets/products.json").subscribe(data => {
      this.products = data;
    });
    this.httpClient.get("../../../../assets/Juices.json").subscribe(data => {
      this.Juices = data;
    });

    this.httpClient.get("../../../../assets/OtherProducts.json").subscribe(data => {
      this.other = data;
    });

  }

}
