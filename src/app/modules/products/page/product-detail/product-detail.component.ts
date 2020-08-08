import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products: Array<any>;
  product: any;
  isJuice: boolean;
  isSalad: boolean;
  other: boolean;


  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    if (this.router.url != '/') {
    
      let element = document.getElementById('start-screen');
      element.style.display = 'none';
      let element2 = document.getElementById('testimonials');
      element2.style.display = 'none';
    }
    if (this.route.snapshot.url[0].path == 'salad') {
      this.isJuice = false;
      this.isSalad = true;
      this.other = false;
      this.httpClient.get("../../../../assets/products.json").subscribe(data => {
        this.products = Array.of(data);
        this.product =  this.products[0].filter(ele => ele.Pid == this.route.snapshot.params.id)[0];
        
      })
    }

    if (this.route.snapshot.url[0].path == 'juice') {
      this.isJuice = true;
      this.isSalad = false;
      this.other = false;
      this.httpClient.get("../../../../assets/Juices.json").subscribe(data => {
        this.product = Array.of(data);
        this.product = this.product[0].filter(ele => ele.Pid == this.route.snapshot.params.id)[0];
      })
    }
    if (this.route.snapshot.url[0].path == 'other') {
      this.isJuice = false;
      this.other = true;
      this.isSalad = false;
      this.httpClient.get("../../../../assets/OtherProducts.json").subscribe(data => {
        this.product = Array.of(data);
        this.product = this.product[0].filter(ele => ele.Pid == this.route.snapshot.params.id)[0];
      })
    }
    
  }

}
