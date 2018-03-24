import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-requests',
  templateUrl: 'requests.html',
})
export class RequestsPage {

  requests = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.getData();
  }

  ionViewDidLoad() {
    this.getData();
  }

  getData(){
    this.db.list('/uploads').valueChanges().subscribe(
      data => {
        this.requests = data;

      }
    );
  }

}
