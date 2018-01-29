import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginOptionsPage } from './login-options';
import { ApiService } from '../../shared/api.service';
@NgModule({
  declarations: [
    LoginOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginOptionsPage),
  ],
  providers : [
  	ApiService
  ]
})
export class LoginOptionsPageModule {}
