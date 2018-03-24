import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ManagerLoginPage } from '../pages/manager-login/manager-login';
import { EmployeeLoginPage } from '../pages/employee-login/employee-login';
import { ManagerTabsPage } from '../pages/manager-tabs/manager-tabs';
import { EmployeeTabsPage } from '../pages/employee-tabs/employee-tabs';
import { AddEmployeePage } from '../pages/add-employee/add-employee';
import { AllEmployeesPage } from '../pages/all-employees/all-employees';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { Camera } from '@ionic-native/camera';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map'
import { GoogleMaps } from '@ionic-native/google-maps';



const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDQt7fOs_elzJDYyqhK9RZk8sC9IMTqZR4",
  authDomain: "colessicky.firebaseapp.com",
  databaseURL: "https://colessicky.firebaseio.com",
  projectId: "colessicky",
  storageBucket: "colessicky.appspot.com",
  messagingSenderId: "1045426130405"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ManagerLoginPage,
    EmployeeLoginPage,
    ManagerTabsPage,
    AddEmployeePage,
    EmployeeTabsPage,
    AllEmployeesPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ManagerLoginPage,
    EmployeeLoginPage,
    ManagerTabsPage,
    AddEmployeePage,
    EmployeeTabsPage,
    AllEmployeesPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    SpinnerDialog,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
