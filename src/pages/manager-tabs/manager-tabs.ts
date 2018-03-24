import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-manager-tabs',
  templateUrl: 'manager-tabs.html'
})
export class ManagerTabsPage {

  homeTabRoot = 'HomeTabPage'
  hiredRoot = 'HiredPage'
  requestsRoot = 'RequestsPage'
  profileRoot = 'ProfilePage'


  constructor(public navCtrl: NavController) {}

}
