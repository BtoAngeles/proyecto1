import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigurarPage } from './configurar';

@NgModule({
  declarations: [
    ConfigurarPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigurarPage),
  ],
  exports: [
    ConfigurarPage
  ]
})
export class ConfigurarPageModule {}
