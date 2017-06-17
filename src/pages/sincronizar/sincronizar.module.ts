import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SincronizarPage } from './sincronizar';

@NgModule({
  declarations: [
    SincronizarPage,
  ],
  imports: [
    IonicPageModule.forChild(SincronizarPage),
  ],
  exports: [
    SincronizarPage
  ]
})
export class SincronizarPageModule {}
