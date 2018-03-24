import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddEmployeePage } from '../add-employee/add-employee';
import { AllEmployeesPage } from '../all-employees/all-employees';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  addNew(){

    this.navCtrl.push(AddEmployeePage).then(() => {
      let index = 0;
      this.navCtrl.remove(index);
      this.navCtrl.setRoot(AddEmployeePage);
    });

  }

  allEmp(){

    this.navCtrl.push(AllEmployeesPage).then(() => {
      let index = 0;
      this.navCtrl.remove(index);
      this.navCtrl.setRoot(AllEmployeesPage);
    });

  }


  logout(){

      localStorage.setItem("username","");
      localStorage.setItem("password","");
      localStorage.setItem("loggedIn","false");

      this.navCtrl.push(HomePage)
    .then(() => {
     
        this.navCtrl.setRoot(HomePage);

    });

  }

}
