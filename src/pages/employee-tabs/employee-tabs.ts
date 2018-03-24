import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-employee-tabs',
  templateUrl: 'employee-tabs.html'
})
export class EmployeeTabsPage {

  empHomeTabRoot = 'EmpHomeTabPage'
  empProfileTabRoot = 'EmpProfileTabPage'


  constructor(public navCtrl: NavController) {}

}
