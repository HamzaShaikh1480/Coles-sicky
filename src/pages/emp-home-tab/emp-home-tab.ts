import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { storage, initializeApp } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

import { SpinnerDialog } from '@ionic-native/spinner-dialog';

import { Geolocation } from '@ionic-native/geolocation';


@IonicPage()
@Component({
  selector: 'page-emp-home-tab',
  templateUrl: 'emp-home-tab.html',
})
export class EmpHomeTabPage {

  default: any;
  state:any;
  isToggled: boolean = true;

  currentDate;
  unixTime;

  url;
  date_final;
  dis;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private camera: Camera, 
              public db: AngularFireDatabase, 
              private spinnerDialog: SpinnerDialog,
              private geolocation: Geolocation
              ) {

    this.default = "https://firebasestorage.googleapis.com/v0/b/colessicky.appspot.com/o/defi.jpg?alt=media&token=d71242e3-e67c-4550-a6bc-2320b39880fc";
  
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      let id = localStorage.getItem("emp_id");
      this.db.list('/employees/').update(id, {lat:resp.coords.latitude, lon:resp.coords.longitude});
     }).catch((error) => {
       console.log('Error getting location', error);
     });

    this.date_final = "";
    this.dis = "no";
  }

  notify() {
    // console.log("Toggled: "+ this.isToggled);
    // alert("State: "+this.isToggled);
  
    let id = localStorage.getItem("emp_id");
    this.state = this.isToggled;
    if(this.state == true){
    this.db.list('/employees/').update(id, {status:"online"});
    }

    if(this.state == false){
      this.db.list('/employees/').update(id, {status:"offline"});
      }



  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad EmpHomeTabPage');
  } 

 takePhoto(){

    try{
    
  
    this.camera.getPicture({
      quality:50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      saveToPhotoAlbum:true,
      correctOrientation: true
    }).then(ImageData=>{
      this.default = 'data:image/jpeg;base64,' + ImageData;

    });

  }
  catch(e){
    console.error(e);
    alert(e);
  }

  }

  upload(){
    this.spinnerDialog.show("Uploading Image","Please wait...");
    this.dis = "yes";
    this.currentDate = new Date();
    this.unixTime = this.currentDate.getTime();

    this.date_final = "Uploading Image...";
    let ref = storage().ref('uploads/'+this.unixTime);
      ref.putString(this.default, 'data_url').then(pic=>{
        this.url = pic.downloadURL;
        this.insertInDataBase(this.url);
      });
  }

  insertInDataBase(image_url){
    let emp_name = localStorage.getItem("emp_name");
    let emp_id = localStorage.getItem("emp_id");

    let dateObj = new Date();
    var year = dateObj.getFullYear().toString();
    var month = dateObj.getMonth().toString();
    var day = dateObj.getDate().toString();

    var final_date = year+"/"+month+"/"+day;


    var newID =   this.db.list('/uploads/').push({
      date: final_date,
      id:emp_id,
      name: emp_name,
      image: image_url,
    });

    this.date_final = "Image Uploaded";
    this.dis = "no";
    this.date_final = "";
    this.spinnerDialog.hide();
    this.default = "https://firebasestorage.googleapis.com/v0/b/colessicky.appspot.com/o/defi.jpg?alt=media&token=d71242e3-e67c-4550-a6bc-2320b39880fc";



  }




}
