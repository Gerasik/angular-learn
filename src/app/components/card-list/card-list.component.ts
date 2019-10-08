import { CardList, Card } from './../../models/Cards';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})

export class CardListComponent {

  @Input() public searchCriterion: string;
  @Input() public cardList: CardList;

  @Output() public editCard = new EventEmitter<any>();
  @Output() public removeCard = new EventEmitter<{item: Card, list: CardList}>();
  @Output() public addCard = new EventEmitter<any>();

  onRemoveCard(card: Card){
    this.removeCard.emit({
      item: card,
      list: this.cardList
    })
  }

  onEditCard(card: Card){
    this.editCard.emit({
      item: card,
      list: this.cardList.cards
    })
  }

  onCreateCard(){
    this.addCard.emit(this.cardList);
  }

}
