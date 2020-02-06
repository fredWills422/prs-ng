import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { MenuComponent } from './core/menu/menu.component';
import { SortPipe } from './pipe/sort.pipe';
import { FormsModule } from '@angular/forms';

import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    MenuComponent,
    SortPipe,

    UserListComponent,
    UserDetailComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
