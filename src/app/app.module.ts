import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {GroupsComponent} from './groups/groups.component';
import {ManagersComponent} from './managers/managers.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { AdduserComponent } from './users/adduser/adduser.component';
import { DeleteuserComponent } from './users/deleteuser/deleteuser.component';
import { AddgroupComponent } from './groups/addgroup/addgroup.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GroupsComponent,
    ManagersComponent,
    HeaderComponent,
    AdduserComponent,
    DeleteuserComponent,
    AddgroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
