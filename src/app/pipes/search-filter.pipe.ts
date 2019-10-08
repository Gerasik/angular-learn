import { Card } from './../models/Cards';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(cards: Card[], searchCriterion: string): Card[] {
    return searchCriterion ?
    cards.filter( (item:{ name: string }) => item.name.toLowerCase().startsWith(searchCriterion.toLowerCase()))
    : cards;
  }

}
