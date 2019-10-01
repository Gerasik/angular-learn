import { Card } from './../../models/Cards';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent implements Card {

  @Input() public id: string;
  @Input() public name: string;
  @Input() public description: string;

}
