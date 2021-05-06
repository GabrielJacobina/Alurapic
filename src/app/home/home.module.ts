import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {SigninComponent} from './signin/signin.component';
import {VMessageModule} from '../shared/components/vmessage/vmessage.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule
  ],
  declarations: [SigninComponent, SignupComponent]
})
export class HomeModule { }
