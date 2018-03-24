import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ManagerLoginPage } from '../manager-login/manager-login';
import { EmployeeLoginPage } from '../employee-login/employee-login';
import { ManagerTabsPage } from '../manager-tabs/manager-tabs';
import { EmployeeTabsPage } from '../employee-tabs/employee-tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loggedIn;
  tabBarElement;

  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
    this.tabBarElement = document.querySelector('#emp_tabs ion-tabbar-section');
    
    // this.redirect();
  }

  ionViewDidEnter(){
    this.redirect();
  }

  redirect(){

    this.loggedIn = localStorage.getItem('loggedIn');
    let type = localStorage.getItem('type');
    if(this.loggedIn == "true"){

          if(type == "manager"){
            this.navCtrl.push(ManagerTabsPage).then(() => {
              let index = 0;
              this.navCtrl.remove(index);
              this.navCtrl.setRoot(ManagerTabsPage);
            });
         }

        else if(type == "employee"){
            this.navCtrl.push(EmployeeTabsPage).then(() => {
              let index = 0;
              this.navCtrl.remove(index);
              this.navCtrl.setRoot(EmployeeTabsPage);
            });
          }
  


    }
    else{
      let elem = <HTMLElement>document.querySelector(".tabbar");
            if (elem != null) {
              elem.style.display = 'none';
            }
    }

  }


  managerLogin(){

    this.navCtrl.push(ManagerLoginPage).then(() => {
      let index = 0;
      this.navCtrl.remove(index);
      this.navCtrl.setRoot(ManagerLoginPage);
    });


  }

  employeeLogin(){

    this.navCtrl.push(EmployeeLoginPage).then(() => {
      let index = 0;
      this.navCtrl.remove(index);
      this.navCtrl.setRoot(EmployeeLoginPage);
    });

  }

}
