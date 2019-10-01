import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent {

  public searchCriterion : string;
  @Output() public search = new EventEmitter<string>();

  public onSearch(){
    this.search.emit(this.searchCriterion);
  }

}
