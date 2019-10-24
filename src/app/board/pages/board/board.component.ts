import { BoardService } from './../../services/board.service';
import { Component, Input, OnInit } from '@angular/core';
import { CardList, Card } from '../../models/Cards'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit{
  @Input() public searchCriterion: string;

  constructor(public bs: BoardService){  }

  onRemoveCard(data:{card: Card, list: CardList}):void{
    this.bs.removeCard(data)
  }

  onCreateCard(data:CardList){
    this.bs.goToCreatePage(data);
  }

  onEditCard(data:{card: Card, list: CardList}){
    this.bs.goToEditPage(data);
  }

  public items :CardList[]

  ngOnInit(){
    this.items = this.bs.items;
  }

  onSearch(str:string){
    this.searchCriterion = str;
  }
}
