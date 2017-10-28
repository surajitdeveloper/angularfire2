import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  
  constructor(public http: Http, private firebase: AngularFireDatabase) {
    console.log('Hello DataProvider Provider');
  }
  getData()
  {
    return this.firebase.database.ref();
  }
}
