import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 links: string[] = [
   'Products',
   'Support',
   'Website',
   'About'
 ]

  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('resize', (ev) => {
      const pos: Window | null | EventTarget = ev.currentTarget;
      if (pos && pos instanceof Window && pos.screen.width < 600) {
        this.status = false
      }
    });
  }

  toggleMenu() {
    this.status = !this.status;
  }
}
