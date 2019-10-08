import { User } from './../../models/User';
import { Component, Input } from '@angular/core';
import { CardList } from '../../models/Cards'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent {
  @Input() public searchCriterion: string;
  public readonly user: User = {
    id: '1',
    firstName: 'Yauheni',
    lastName: 'Herasimenka'
  };
  public readonly items :CardList[] = [
    {
      id: '1',
      name: 'Backlog',
      cards: [
        {
          id: "1",
          name: "Task 1",
          description: "desc",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        },{
          id: "2",
          name: "Task 2",
          description: "desc",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        },{
          id: "3",
          name: "Task 3",
          description: "desc",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        }
      ]
    },{
      id: '2',
      name: 'In progress',
      cards: [
        {
          id: "1",
          name: "Task 4",
          description: "desc",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        },{
          id: "2",
          name: "Task 5",
          description: "desc",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        },{
          id: "3",
          name: "Task 6",
          description: "desc",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        }
      ]
    },{
      id: '3',
      name: 'Done',
      cards: [
        {
          id: "1",
          name: "Task 7",
          description: "desc",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        },{
          id: "2",
          name: "Task 8",
          description: "desc",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        },{
          id: "3",
          name: "Task 9",
          description: "desc",
          dueDate: new Date("11-11-2019"),
          assignee: this.user
        }
      ],
      isDoneSelection: true
    },
  ]
}
