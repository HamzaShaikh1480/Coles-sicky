import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-emp-profile-tab',
  templateUrl: 'emp-profile-tab.html',
})
export class EmpProfileTabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpProfileTabPage');
  }

  logout(){

    localStorage.setItem("loggedIn","false");

    this.navCtrl.push(HomePage)
    .then(() => {
     
        this.navCtrl.setRoot(HomePage);

    });

  }

}
