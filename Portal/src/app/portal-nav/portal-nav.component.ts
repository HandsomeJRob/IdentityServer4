import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-nav',
  templateUrl: './portal-nav.component.html',
  styleUrls: ['./portal-nav.component.css']
})
export class PortalNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public login() {
    console.log("login");
  }
}
