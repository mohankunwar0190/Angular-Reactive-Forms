import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';

const registerRoutes: Routes = [
  { path: '', component: RegisterComponent }
];
@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    ReactiveFormsModule,
    RouterModule.forChild(registerRoutes)
],
  providers: [],
  exports: [RegisterComponent]
})
export class RegisterModule { }
