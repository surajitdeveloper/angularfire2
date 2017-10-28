import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from "../../providers/http-service/http-service"
import { DataProvider } from "../../providers/data/data";
/**
 * Generated class for the ChildSpecialistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-child-specialist',
  templateUrl: 'child-specialist.html',
})
export class ChildSpecialistPage {
  page_title: string;
  cat_id: number;
 //data: Array<{title: string, details: string, address:string, time:string, day:string, icon: string, showDetails: boolean}> = [];
 data = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
            private httpserv: HttpServiceProvider,
            private dataProvider: DataProvider) {
                
    
  }
  ionViewWillEnter()
 {
  this.cat_id = this.navParams.get("cat_id");
  this.page_title = this.navParams.get("cat_name");
  let doctors_data = this.dataProvider.getData().child("doctors_data");
  let put_data = [];
  doctors_data.orderByChild('cat_id')
  .startAt(this.cat_id).endAt(this.cat_id)
  .on("child_added", function(snap)
  {
      put_data.push(snap.val());
  });
  this.data = put_data;
   this.httpserv.getSetviceProvider().subscribe(data =>{
     //alert(JSON.stringify(data));
   });
 }
  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
    } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
    }


}



}