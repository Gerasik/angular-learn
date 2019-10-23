import { BoardService } from './../../services/board.service';
import { Component, Input, OnInit } from '@angular/core';
import { CardList } from '../../models/Cards'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit{
  @Input() public searchCriterion: string;

  constructor(public boardService: BoardService){  }

  onRemoveCard({item, list}):void{
    list.cards.splice(list.cards.indexOf(item),1);
  }

  public items :CardList[]

  ngOnInit(){
    this.items = this.boardService.items;
    console.log('======');
    console.log(this.boardService.items[0].cards[0]);
    console.log('======');
  }

}
