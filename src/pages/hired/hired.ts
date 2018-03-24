import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-hired',
  templateUrl: 'hired.html',
})
export class HiredPage {


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
