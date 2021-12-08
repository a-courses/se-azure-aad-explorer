import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {ManagersComponent} from './managers/managers.component';
import {GroupsComponent} from './groups/groups.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'managers', component: ManagersComponent},
  {path: 'groups', component: GroupsComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: '**', redirectTo: '/users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
