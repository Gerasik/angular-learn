import { Card } from './../../models/Cards';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent implements OnInit, Card {

  public id: string;
  public name: string;
  public description: string;

  constructor() { }

  ngOnInit() {
  }

}
