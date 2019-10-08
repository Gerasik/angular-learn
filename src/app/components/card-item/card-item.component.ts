import { Card } from './../../models/Cards';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent {

  @Input() public card: Card;
  @Output() public editCard = new EventEmitter<Card>();
  @Output() public removeCard = new EventEmitter<Card>();

  public showAll = false;

  public toggleItem(): void{
    this.showAll = !this.showAll;
  }

  onEdit(){
    this.editCard.emit(this.card);
  }

  onRemove(){
    this.removeCard.emit(this.card);
  }
}
