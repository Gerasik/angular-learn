import { BoardService } from './services/board.service';

import { BoardComponent } from './pages/board/board.component';

import { CardItemComponent } from './components/card-item/card-item.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardRoutingModule } from './board-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './pages/edit/edit.component';
import {
  MatSelectModule, MatFormFieldModule,
  MatButtonModule, MatInputModule,
  MatCardModule, MatListModule
  } from '@angular/material';

@NgModule({
  declarations: [
    SearchFilterPipe,
    CardListComponent,
    CardItemComponent,
    ToolbarComponent,
    BoardComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    BoardComponent
  ],
  providers: [
    BoardService
  ]
})
export class BoardModule { }
