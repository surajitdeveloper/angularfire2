import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DentistPage } from './dentist';

@NgModule({
  declarations: [
    DentistPage,
  ],
  imports: [
    IonicPageModule.forChild(DentistPage),
  ],
})
export class DentistPageModule {}
