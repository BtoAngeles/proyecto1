import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EncuestaServiceProvider } from '../../providers/encuesta-service/encuesta-service';
import { EncLocalserviceProvider } from '../../providers/enc-localservice/enc-localservice';
import { BaseDatosProvider } from '../../providers/base-datos/base-datos';
/**
 * Generated class for the SincronizarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sincronizar',
  templateUrl: 'sincronizar.html',
  providers: [EncuestaServiceProvider]
})
export class SincronizarPage {
elementos: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public encuestaSer: EncuestaServiceProvider,public encLocal: EncLocalserviceProvider,
  	public db:BaseDatosProvider) {
	
  }

  ionViewWillEnter() {
    this.obtenerElementos();
  }

public modificar(){
  for(var i=0;i < this.elementos.length;i++){
      this.encuestaSer.modificarDatos(this.elementos[i].idRespuesta)
          .then(
              data=>{
                alert("Sincronizado correctamente");
              })
          .catch(
              error=>{
                alert("error");
              });
      this.db.borrar(this.elementos[i].id)
          .then(response => {
            console.log(response);
            this.elementos.splice(i,1);
            alert("Dato elimindado "+this.elementos[i].id);
          });
  }
  alert("Sincronizado correctamente");
}

public obtenerElementos(){
	this.db.ObtenerDatos()
		.then(elementos =>{
			this.elementos = elementos;
		})
}

}
