import { Router } from '@angular/router';
import { User } from './../models/User';
import { CardList, Card } from './../models/Cards';
import { Injectable } from '@angular/core';

@Injectable()
export class BoardService {

  public readonly user: User = {
    id: '1',
    firstName: 'Yauheni',
    lastName: 'Herasimenka'
  };

  public readonly userList: User[] = [this.user];

  public readonly items :CardList[] = [
    {
      id: '1',
      name: 'Backlog',
      cards: [
        {
          id: "11",
          name: "Task 1",
          description: "desc",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        },{
          id: "12",
          name: "Task 2",
          description: "desc",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        },{
          id: "13",
          name: "Task 3",
          description: "desc",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        }
      ],
      isDoneSelection: false
    },{
      id: '2',
      name: 'In progress',
      cards: [
        {
          id: "21",
          name: "Task 4",
          description: "desc",
          dueDate: new Date("11-13-2019"),
          assignee: this.user
        },{
          id: "22",
          name: "Task 5",
          description: "desc",
          dueDate: new Date("11-17-2019"),
          assignee: this.user
        },{
          id: "23",
          name: "Task 6",
          description: "desc",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        }
      ],
      isDoneSelection: false
    },{
      id: '3',
      name: 'Done',
      cards: [
        {
          id: "31",
          name: "Task 7",
          description: "desc",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        },{
          id: "32",
          name: "Task 8",
          description: "desc",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        },{
          id: "33",
          name: "Task 9",
          description: "Geras",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        }
      ],
      isDoneSelection: true
    },
  ]


  getNextIdGroup(groupId:number):number{
    return +this.items[groupId].cards[this.items[groupId].cards.length-1].id + 1;
  }

  editItem(groupId: number, itemId:number, data: {name: string, desc: string, user: string, date: string}):void{
    const item = this.items[groupId].cards[itemId]
    item.name = data.name;
    item.description = data.desc;
    item.dueDate = new Date(data.date);
  }

  createItem(groupId: number, data: {name: string, desc: string, user: string, date: string}):void{
    const card: Card = {
      id: '' + this.getNextIdGroup(groupId),
      name: data.name,
      description: data.desc,
      dueDate: new Date(data.date),
      assignee: this.user

    }
    this.items[groupId].cards.push(card);
  }

  removeCard({card, list}:{card: Card, list: CardList}){
    list.cards.splice(list.cards.indexOf(card),1);
  }

  goToCreatePage(list: CardList){
    const groupId = this.items.indexOf(list);
    this.router.navigateByUrl('/create/' + groupId);
  }

  goToEditPage({card, list}:{card: Card, list: CardList}){
    const groupId = this.items.indexOf(list);
    const cardId = this.items[groupId].cards.indexOf(card);
    this.router.navigateByUrl('/edit/' + groupId + '/' + cardId);
  }

  constructor(private router: Router){}

}
