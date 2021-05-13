import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {SigninComponent} from './signin/signin.component';
import {VMessageModule} from '../shared/components/vmessage/vmessage.module';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home.component';
import {HomeRoutingModules} from './home.routing.modules';
import {SignupService} from './signup/signup.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    HomeRoutingModules
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    HomeComponent
  ],
  providers: [
    SignupService
  ]
})
export class HomeModule {}
