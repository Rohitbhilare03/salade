import { Component, OnInit } from '@angular/core';
import { Subscribe } from './model/subscribe.model';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  subscribe: Subscribe = new Subscribe();
  constructor() { }

  ngOnInit() {
  }

}
