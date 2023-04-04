import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleAddComponent } from './pages/single-add/single-add.component';
import { LayoutComponent } from './layout/layout.component';
import { CreateComponent } from './pages/create/create.component';
import { AccountComponent } from './pages/account/account.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegistrationComponent } from './component/modal/registration/registration.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children:[
    {path: '', component: HomeComponent},
    {path: 'ad/:id', component: SingleAddComponent},
    {path: 'create', component: CreateComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'account', component: AccountComponent},
  ]},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
