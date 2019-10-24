import { EditComponent } from './pages/edit/edit.component';
import { BoardComponent } from './pages/board/board.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';


const routes: Routes = [
  { path: 'board', component: BoardComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'edit/:group/:id', component: EditComponent },
  { path: 'create/:group', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
