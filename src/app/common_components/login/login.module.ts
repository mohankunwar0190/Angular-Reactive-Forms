import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
  { path: '', component: LoginComponent }
];
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(loginRoutes)
],
  providers: [],
  exports: [ LoginComponent ]
})
export class LoginModule { }
