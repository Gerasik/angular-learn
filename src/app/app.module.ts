import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppBoardComponent } from './app-board/app-board.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppCardListComponent } from './app-card-list/app-card-list.component';
import { AppCardItemComponent } from './app-card-item/app-card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppToolbarComponent,
    AppBoardComponent,
    AppFooterComponent,
    AppCardListComponent,
    AppCardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
