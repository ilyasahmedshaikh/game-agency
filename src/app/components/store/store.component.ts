import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  list: any = [];

  constructor() { }

  ngOnInit(): void {
    this.list = [
      { image: "assets/img/g1.jpg", name: "Assassins Creed" },
      { image: "assets/img/g2.jpeg", name: "Nier Automata" },
      { image: "assets/img/g3.jpg", name: "Watch Dogs" },
      { image: "assets/img/g5.jpg", name: "Control" },
      { image: "assets/img/g6.jpg", name: "Watch Dogs 2" },
      { image: "assets/img/g1.jpg", name: "Assassins Creed" },
      { image: "assets/img/g2.jpeg", name: "Nier Automata" },
      { image: "assets/img/g3.jpg", name: "Watch Dogs" },
    ]
  }

}
