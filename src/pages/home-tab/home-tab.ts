import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { MapPage } from '../map/map';



@IonicPage()
@Component({
  selector: 'page-home-tab',
  templateUrl: 'home-tab.html',
})
export class HomeTabPage {

 persons = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
  
    this.getData();
  }

  ionViewDidLoad() {
    this.getData();
  }


  getData(){
    this.db.list('/employees').valueChanges().subscribe(
      data => {
        this.persons = data;

      }
    );
  }

  changeStatus(id){

    this.db.list('/employees/').update(id, {status:"onlineandhired"}) 

  }

  openMap(){
    this.navCtrl.push(MapPage).then(() => {
      let index = 0;
      this.navCtrl.remove(index);
      this.navCtrl.setRoot(MapPage);
    });

  }

}
