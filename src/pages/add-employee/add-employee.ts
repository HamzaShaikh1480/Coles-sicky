import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-add-employee',
  templateUrl: 'add-employee.html',
})
export class AddEmployeePage {

  name;
  contact;
  code;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEmployeePage');
  }

  createEmployee(name, contact, code){

    // let id = this.db.list('/employees/').push(null).key;

    // var id = this.db.list('/employees/').push(null);

    var newID =   this.db.list('/employees/').push({
        id: "1",
        name: name,
        contact: contact.toString(),
        emp_code: code,
        lat: '0',
        lon: '0',
        status: 'offline'
      }).key;

      this.db.list('/employees/').update(newID, {id:newID}) 

      this.name="";
      this.contact="";
      this.code="";


  }

}
