import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';

import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';

import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';


const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: UserListComponent},

  {path: 'user/list', component: UserListComponent},
  {path: 'user/detail/:id', component: UserDetailComponent},
  {path: 'user/create', component: UserCreateComponent},
  {path: 'user/edit/:id', component: UserEditComponent},

  {path: 'vendor/list', component: VendorListComponent},
  {path: 'vendor/detail/:id', component: VendorDetailComponent},
  {path: 'vendor/create', component: VendorCreateComponent},
  {path: 'vendor/edit/:id', component: VendorEditComponent},

  {path: 'product/list', component: ProductListComponent},
  {path: 'product/detail/:id', component: ProductDetailComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},

  {path: 'request/list', component: RequestListComponent},
  {path: 'request/detail/:id', component: RequestDetailComponent},

  {path: '**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
