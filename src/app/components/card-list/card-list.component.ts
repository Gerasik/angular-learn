import { CardList, Card } from './../../models/Cards';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements CardList {

  @Input() public id: string;
  @Input() public name: string;
  @Input() public cards: Card[ ];

}
