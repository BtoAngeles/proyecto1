import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SincronizarPage } from '../pages/sincronizar/sincronizar';
import { EncuestaPage } from '../pages/encuesta/encuesta';
import { ConfigurarPage } from '../pages/configurar/configurar';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { ComentarioPage } from '../pages/comentario/comentario';
import { BaseDatosProvider } from '../providers/base-datos/base-datos';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SincronizarPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public db: BaseDatosProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sincronizar', component: SincronizarPage,icon: 'sync'},
      { title: 'Encuesta', component: EncuestaPage, icon: 'filing' },
      { title: 'Configurarción', component: ConfigurarPage, icon: 'construct' },
      { title: 'Ayuda', component: AyudaPage, icon: 'help-circle' },
      { title: 'Comentario', component: ComentarioPage, icon: 'chatbubbles' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.db.abrirBD().then(()=> this.db.crearTable());
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
