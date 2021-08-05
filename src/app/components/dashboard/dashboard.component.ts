import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  list: any = [];

  constructor() { }

  ngOnInit(): void {
    this.list = [
      { count: "250" },
      { count: "200" },
      { count: "150" },
      { count: "100" },
      { count: "50" }

    ]
  }

}
