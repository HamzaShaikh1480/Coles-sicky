import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpHomeTabPage } from './emp-home-tab';

@NgModule({
  declarations: [
    EmpHomeTabPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpHomeTabPage),
  ],
})
export class EmpHomeTabPageModule {}
