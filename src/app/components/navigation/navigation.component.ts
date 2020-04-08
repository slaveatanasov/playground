import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navScrolled: boolean;

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
    this.navScrolled = false;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 150) {
      //  let element = document.getElementById('navbar');
      //  element.classList.add('nav-scrolled');
      this.navScrolled = true;
     } else {
      // let element = document.getElementById('navbar');
      //   element.classList.remove('nav-scrolled'); 
      this.navScrolled = false;
     }
  }

}
