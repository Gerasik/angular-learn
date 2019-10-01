import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-learn';
  public searchCriterion: string;

  public onSearch(criterion: string) {
    this.searchCriterion = criterion;
    console.log(this.searchCriterion);
  }
}
