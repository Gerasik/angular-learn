import { CardList, Card } from './../../models/Cards';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit, CardList {

  public id: string;
  public name: string;
  public cards: Card[ ];

  constructor() { }

  ngOnInit() {
  }

}
