import { Component, OnInit } from '@angular/core';
import { Card } from '../models/Cards';

@Component({
  selector: 'app-app-card-item',
  templateUrl: './app-card-item.component.html',
  styleUrls: ['./app-card-item.component.sass']
})
export class AppCardItemComponent implements OnInit, Card {

  constructor() { }

  ngOnInit() {
  }

}
