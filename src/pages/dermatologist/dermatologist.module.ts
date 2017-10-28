import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DermatologistPage } from './dermatologist';

@NgModule({
  declarations: [
    DermatologistPage,
  ],
  imports: [
    IonicPageModule.forChild(DermatologistPage),
  ],
})
export class DermatologistPageModule {}
