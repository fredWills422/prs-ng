import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { SortPipe } from './pipe/sort.pipe';
import { MenuComponent } from './core/menu/menu.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    MenuComponent,
    UserListComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
