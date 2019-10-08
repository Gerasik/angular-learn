import { Card } from './../../models/Cards';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent implements OnInit {

  @Input() public card: Card;
  @Input() public isDoneSelection: boolean;
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

  public color: string;

  ngOnInit(){
    let fixDate = new Date('11-20-2019');
    let cardDate = this.card.dueDate;
    let one_day = 1000*60*60*24;
    let diffDay = +fixDate - +cardDate;
    let days = diffDay/one_day;
    if (days < 4){
      this.color = 'red';
    } else if (days < 8){
      this.color = 'yellow';
    } else {
      this.color = 'inherit';
    }
  }
}
