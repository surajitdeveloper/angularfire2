import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {  HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ChildSpecialistPage } from '../pages/child-specialist/child-specialist';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { DataProvider } from '../providers/data/data';
export const firebaseConfig = {
  apiKey: "AIzaSyCDJJavpZ-675SCkYUI86v6DU6SjEiLSAw",
  authDomain: "doctors-466e6.firebaseapp.com",
  databaseURL: "https://doctors-466e6.firebaseio.com",
  projectId: "doctors-466e6",
  storageBucket: "doctors-466e6.appspot.com",
  messagingSenderId: "609144908462"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ChildSpecialistPage
  ],
  imports: [
    BrowserModule, HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ChildSpecialistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServiceProvider,
    DataProvider
  ]
})
export class AppModule {}
