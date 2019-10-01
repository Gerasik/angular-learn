import {User} from './user'

export class CardList {
  id: string;
  name: string;
  cards: Card[ ];
}
export class Card {
  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: User;
}
