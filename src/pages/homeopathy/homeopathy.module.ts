import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeopathyPage } from './homeopathy';

@NgModule({
  declarations: [
    HomeopathyPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeopathyPage),
  ],
})
export class HomeopathyPageModule {}
