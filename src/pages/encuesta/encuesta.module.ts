import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncuestaPage } from './encuesta';

@NgModule({
  declarations: [
    EncuestaPage,
  ],
  imports: [
    IonicPageModule.forChild(EncuestaPage),
  ],
  exports: [
    EncuestaPage
  ]
})
export class EncuestaPageModule {}
