import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './feature/user/user-list/user-list.component';


const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: UserListComponent},

  {path: 'user/list', component: UserListComponent},

  {path: '**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
