import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile =   [{Id:1,imageUrl:"https://stackblitz.com/files/ionic-5-angular-10-profile/github/tonykobe8/ionic-5-angular-10-profile/master/src/WP_20140322_005-1.jpg" }];
constructor() { }

  ngOnInit() {
  }

}