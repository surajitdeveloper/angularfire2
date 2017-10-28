import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChildSpecialistPage } from '../child-specialist/child-specialist';
import { DataProvider } from "../../providers/data/data";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
     splash = true;
     ext_put_data = [];
  constructor( public nav: NavController, private data: DataProvider ){
    let catagoty_child = this.data.getData().child("catagory");
    let put_data = [];
    /*
    let func_data = function(snap1)
    {
        if(snap1.key == "cat_name")
        {
            let cat_obj = {cat_name: snap1.val()};
            
        }
    };
    */
    catagoty_child.on("child_added", function(snap)
      {
          //let key = snap.key;
          //console.log("snap val");
          //console.log(snap.val());
          put_data.push(snap.val());
          //catagoty_child.child(key).on("child_added", func_data);
      });
      this.ext_put_data = put_data;
      console.log(this.ext_put_data);
   }
  ionViewWillEnter(){ }
  nextPage(cat_id, page_title){
        //alert(cat_id);
        this.nav.push(ChildSpecialistPage, {cat_id: cat_id, cat_name: page_title});     
    }
   ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }
}