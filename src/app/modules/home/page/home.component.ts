import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products : any;
  Juices : any;
  other: any;

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    if (this.router.url == '/') {
      console.log(this.router.url);
      let element = document.getElementById('start-screen');
      element.style.display = 'block';
      let element2 = document.getElementById('testimonials');
      element2.style.display = 'block';
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
