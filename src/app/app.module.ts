import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    MenuComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
