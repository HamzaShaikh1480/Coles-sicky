import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllEmployeesPage } from './all-employees';

@NgModule({
  declarations: [
    AllEmployeesPage,
  ],
  imports: [
    IonicPageModule.forChild(AllEmployeesPage),
  ],
})
export class AllEmployeesPageModule {}
