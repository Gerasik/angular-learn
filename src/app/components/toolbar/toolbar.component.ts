import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})

export class ToolbarComponent {
  @Output() public search = new EventEmitter<string>();

  public searchCriterion : string;

  public onSearch(){
    this.search.emit(this.searchCriterion);
  }
}
