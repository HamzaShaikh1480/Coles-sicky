import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpProfileTabPage } from './emp-profile-tab';

@NgModule({
  declarations: [
    EmpProfileTabPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpProfileTabPage),
  ],
})
export class EmpProfileTabPageModule {}
