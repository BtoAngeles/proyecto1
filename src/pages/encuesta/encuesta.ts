import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EncuestaServiceProvider } from '../../providers/encuesta-service/encuesta-service';
import { EncLocalserviceProvider} from '../../providers/enc-localservice/enc-localservice';
import { PreguntasPage } from '../preguntas/preguntas';
/**
 * Generated class for the EncuestaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-encuesta',
  templateUrl: 'encuesta.html',
  providers: [EncuestaServiceProvider]
})
export class EncuestaPage {
encuestas;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public encuestaSer: EncuestaServiceProvider,public encLocal: EncLocalserviceProvider) {

  		this.encuestaSer.getEncuesta()
  			.then(
  				data=> {
  					this.encuestas = data;
  				}
  				)
  				.catch(
  					error=>{
  						console.log(error);
  					}
  					)

  }

  onClick(id){
    console.log("IdEncuesta ="+id);
    this.encLocal.setId_encuesta(id);
    this.navCtrl.push(PreguntasPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestaPage');
  }

}
