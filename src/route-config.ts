import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './app/common_components/register/register.component';
import { LoginComponent } from './app/common_components/login/login.component';
import { AppComponent } from './app/app.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', loadChildren: './app/common_components/login/login.module#LoginModule', outlet: 'primary' },
    { path: 'register', loadChildren: './app/common_components/register/register.module#RegisterModule', outlet: 'primary' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    declarations: []
})
export class RouteConfigModule { }

