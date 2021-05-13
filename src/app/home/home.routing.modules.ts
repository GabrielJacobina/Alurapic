import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthGuard} from '../core/auth/auth.guard';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';

const routers: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routers)
  ],
  exports: [RouterModule]
})

export class HomeRoutingModules {
}
