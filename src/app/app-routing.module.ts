import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'board', loadChildren: './board/board.module#BoardModule', canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: '',
  redirectTo: '/board',
  pathMatch: 'full' },
  { path: '**', redirectTo: '/board'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
