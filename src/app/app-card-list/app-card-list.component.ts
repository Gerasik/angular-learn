import { Component, OnInit } from '@angular/core';
import { CardList } from '../models/Cards'

@Component({
  selector: 'app-app-card-list',
  templateUrl: './app-card-list.component.html',
  styleUrls: ['./app-card-list.component.sass']
})
export class AppCardListComponent implements OnInit, CardList {

  constructor() { }

  ngOnInit() {
  }

}
