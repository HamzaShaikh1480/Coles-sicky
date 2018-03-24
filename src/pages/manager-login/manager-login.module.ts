import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagerLoginPage } from './manager-login';

@NgModule({
  declarations: [
    ManagerLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagerLoginPage),
  ],
})
export class ManagerLoginPageModule {}
