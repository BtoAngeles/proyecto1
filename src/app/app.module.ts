import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { SincronizarPage } from '../pages/sincronizar/sincronizar';
import { EncuestaPage } from '../pages/encuesta/encuesta';
import { ConfigurarPage } from '../pages/configurar/configurar';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { ComentarioPage } from '../pages/comentario/comentario';
import { PreguntasPage } from '../pages/preguntas/preguntas';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EncuestaServiceProvider } from '../providers/encuesta-service/encuesta-service';
import { EncLocalserviceProvider } from '../providers/enc-localservice/enc-localservice';

import { HttpModule } from '@angular/http';
import { BaseDatosProvider } from '../providers/base-datos/base-datos';
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    SincronizarPage,
    EncuestaPage,
    ConfigurarPage,
    AyudaPage,
    ComentarioPage,
    PreguntasPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SincronizarPage,
    EncuestaPage,
    ConfigurarPage,
    AyudaPage,
    ComentarioPage,
    PreguntasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EncuestaServiceProvider,
    EncLocalserviceProvider,
    BaseDatosProvider,
    SQLite
  ]
})
export class AppModule {}
