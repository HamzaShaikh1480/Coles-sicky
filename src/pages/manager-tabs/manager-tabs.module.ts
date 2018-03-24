import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagerTabsPage } from './manager-tabs';

@NgModule({
  declarations: [
    ManagerTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagerTabsPage),
  ]
})
export class ManagerTabsPageModule {}
