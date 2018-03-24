import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ManagerTabsPage } from '../manager-tabs/manager-tabs';

import { AngularFireAuth } from 'angularfire2/auth';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';




@IonicPage()
@Component({
  selector: 'page-manager-login',
  templateUrl: 'manager-login.html',
})
export class ManagerLoginPage {

  username;
  password;

  constructor(public navCtrl: NavController,public navParams: NavParams,private afAuth: AngularFireAuth, private spinnerDialog: SpinnerDialog) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerLoginPage');
  }

  login(){
    this.spinnerDialog.show("Loggin In","Please wait...");
    this.afAuth.auth.signInWithEmailAndPassword(this.username,this.password).then(
      data =>{
        localStorage.setItem('username', this.username);
        localStorage.setItem('password',this.password);
        localStorage.setItem('loggedIn', "true");
        localStorage.setItem('type', "manager");
        
        this.gotoMain();
      }
    ).catch(error => {
      alert("Email or password incorrect");
    });
    this.spinnerDialog.hide();
  }

  gotoMain(){

    this.navCtrl.push(ManagerTabsPage).then(() => {
      let index = 0;
      this.navCtrl.remove(index);
      this.navCtrl.setRoot(ManagerTabsPage);
    });

  }

}
