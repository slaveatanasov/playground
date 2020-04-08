import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies-policy',
  templateUrl: './cookies-policy.component.html',
  styleUrls: ['./cookies-policy.component.scss']
})
export class CookiesPolicyComponent implements OnInit {
  display: boolean;
  removeContent: boolean;

  constructor() { }

  ngOnInit() {
    // if (localStorage.getItem('cookiesSet')) {
    //   this.display = false;
    // } else {
    //   this.display = true;
    // }
    this.display = true;
    this.removeContent = false;
  }

  changeDisplayStatus() {
    this.display = false;
    localStorage.setItem('cookiesSet', "true")
    setTimeout(() => {
      this.removeContent = true;
    }, 999)
  }

}
