import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AyurvedicPage } from './ayurvedic';

@NgModule({
  declarations: [
    AyurvedicPage,
  ],
  imports: [
    IonicPageModule.forChild(AyurvedicPage),
  ],
})
export class AyurvedicPageModule {}
