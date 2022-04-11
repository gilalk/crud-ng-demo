import { Component, OnInit } from '@angular/core';

export interface menuItem{
  title: string;
  link: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: menuItem[] = []

  constructor() { 
    this.setMenuItems();
  }

  ngOnInit(): void {
  }

  setMenuItems() {
    this.items.push({title: 'Home', link: 'dashboard'});
    this.items.push({title: 'Courses', link: 'courses'});
  }
}
