import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  constructor(public http_vijay: Http) {
    console.log('Hello HttpServiceProvider Provider');
  }
  
  
  getSetviceProvider() {
    var url = 'https://ipinfo.io/json';
    var response = this.http_vijay.get(url).map(resource => resource.json());
    return response;
}  

}
