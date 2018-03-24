import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GoogleMaps,GoogleMap,GoogleMapsEvent,GoogleMapOptions,CameraPosition,MarkerOptions,Marker} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: GoogleMap;

  mapOptions: GoogleMapOptions;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private geolocation: Geolocation
            ) {
  }

  ionViewDidLoad() {
   this.loadMap();
  }

  gotData(data){

    var value = data.val();
    var keys = Object.keys(value);
    // console.log(keys);

    for(var i=0; i<keys.length; i++){
      var k = keys[i];
      var lat = value[k].lat;
      // console.log("Latitude: "+lat);

      var lon = value[k].lon;
      var name = value[k].name;
      // console.log("Longitude: "+lon);


      // this.map.addMarker({
      //   title: name,
      //   icon: 'blue',
      //   animation: 'DROP',
      //   position: {
      //     lat: lat,
      //     lng: lon
      //   }
      // })
      // .then(marker => {
      //   marker.on(GoogleMapsEvent.MARKER_CLICK)
      //     .subscribe(() => {
      //       // alert('clicked');
      //     });
      // });
      


    }

  }

  errData(){

  }


  loadMap() {

    this.map = GoogleMaps.create('map', this.mapOptions);

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

       this.mapOptions = {
        camera: {
          target: {
            lat: resp.coords.latitude,
            lng: resp.coords.longitude
          },
          zoom: 18,
          tilt: 30
        }
      };

      var dbase = firebase.database();
      var refer = dbase.ref('employees');
      refer.once('value', this.gotData, this.errData);



       // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      console.log('Map is ready!');

      // Now you can use all methods safely.
      this.map.addMarker({
          title: 'You',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: resp.coords.latitude,
            lng: resp.coords.longitude
          }
        })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              // alert('clicked');
            });
        });

    });
      


     }).catch((error) => {
       console.log('Error getting location', error);
     });


    // var dbase = firebase.database();
    // var refer = dbase.ref('employees');
    // refer.once('value', this.gotData, this.errData);



   
  }




}
