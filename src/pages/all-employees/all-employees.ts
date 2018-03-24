import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-all-employees',
  templateUrl: 'all-employees.html',
})
export class AllEmployeesPage {

  person = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.getData();
  }

  ionViewDidLoad() {
    this.getData();
  }


  getData(){
    this.db.list('/employees').valueChanges().subscribe(
      data => {
        this.person = data;
      
      }
    );
  }


}
