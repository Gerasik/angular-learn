import { CardList, Card } from '../../models/Cards';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})

export class CardListComponent {

  @Input() public searchCriterion: string;
  @Input() public cardList: CardList;

  @Output() public editCard = new EventEmitter<{card: Card, list: CardList}>();
  @Output() public removeCard = new EventEmitter<{card: Card, list: CardList}>();
  @Output() public addCard = new EventEmitter<CardList>();

  onRemoveCard(card: Card){
    this.removeCard.emit({
      card,
      list: this.cardList
    })
  }

  onEditCard(card: Card){
    this.editCard.emit({
      card,
      list: this.cardList
    })
  }

  onCreateCard(){
    this.addCard.emit(this.cardList);
  }

}
