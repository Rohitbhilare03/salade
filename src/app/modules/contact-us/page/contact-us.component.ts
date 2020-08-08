import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url != '/') {
      console.log(this.router.url);
      let element = document.getElementById('start-screen');
      element.style.display = 'none';
      let element2 = document.getElementById('testimonials');
      element2.style.display = 'none';
    }
  }
}
