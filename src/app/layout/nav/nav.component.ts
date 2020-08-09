import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SubscriptionComponent } from 'src/app/component/subscription/subscription.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navigationClicked: boolean = false;

  constructor(public router: Router, public dialog: MatDialog) { }

  ngOnInit() {

  }

  openDialog() {
    const dialogRef = this.dialog.open(SubscriptionComponent, {
      width: (window.innerWidth >= 768 ? '30%' : '100%')
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
