import { Card } from '../models/Cards';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(cards: Card[], searchCriterion: string): Card[] {
    return searchCriterion ?
    cards.filter( (item:{ name: string, description: string }) =>
    !!item.name.toLocaleLowerCase().match(`${searchCriterion.toLocaleLowerCase()}`)
    || !!item.description.toLocaleLowerCase().match(`${searchCriterion.toLocaleLowerCase()}`))
    : cards;
  }

}
