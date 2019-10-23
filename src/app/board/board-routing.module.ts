import { EditComponent } from './pages/edit/edit.component';
import { BoardComponent } from './pages/board/board.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'board', component: BoardComponent },
  { path: 'edit/:group/:id', component: EditComponent },
  { path: 'create/:group', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
