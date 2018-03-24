import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployeeTabsPage } from '../employee-tabs/employee-tabs';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-employee-login',
  templateUrl: 'employee-login.html',
})
export class EmployeeLoginPage {


  person = [];
  isToggled: boolean;
  msg;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
   


    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeLoginPage');
  }

  notify(){
    alert("Logged In");
  }

  gotoMain(name, emp_code, id, status){

    // alert("Name: "+name+"\nEmp_code: "+emp_code+"\nID: "+id+"\nStatus: "+status);

    localStorage.setItem("emp_name",name);
    localStorage.setItem("emp_code",emp_code);
    localStorage.setItem("emp_id",id);
    localStorage.setItem("emp_status",status);
    localStorage.setItem('loggedIn', "true");
    localStorage.setItem('type', "employee");

    this.navCtrl.push(EmployeeTabsPage).then(() => {
      let index = 0;
      this.navCtrl.remove(index);
      this.navCtrl.setRoot(EmployeeTabsPage);
    });

    

  }



  checkLogin(){
    // this.msg = "Checking Account...";

    this.db.list('/employees').valueChanges().subscribe(
      data => {
        this.person = data;
        
      });

  }





}
