import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isActive;
  constructor() { }

  ngOnInit() {
  }
  active(){
    this.isActive=!this.isActive;
    console.log(this.isActive);
  }
}
