import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EncuestaServiceProvider } from '../../providers/encuesta-service/encuesta-service';
import { EncLocalserviceProvider} from '../../providers/enc-localservice/enc-localservice';
import { Slides} from 'ionic-angular';
import { BaseDatosProvider } from '../../providers/base-datos/base-datos';
/**
 * Generated class for the PreguntasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-preguntas',
  templateUrl: 'preguntas.html',
})
export class PreguntasPage {
preguntas;
@ViewChild('mySlider') slider: Slides;
currentIndex:number = 0;
respuestas;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public encuestaSer: EncuestaServiceProvider,public encLocal: EncLocalserviceProvider,
    public db: BaseDatosProvider) {
      this.encuestaSer.getEncEspecif(this.encLocal.getId_encuesta())
  			.then(
  				data=>{
  					console.log(data);
  					this.preguntas = data;
  				}
  				)
  			.catch(
  				error=>{
  					console.log(error);
  				}
  				)

  }

//Obtiene el valor del indice del Sider y manda a llamar funcion para agregar las respuestas posibles
  onSlideChanged(){
      this.currentIndex = this.slider.getActiveIndex();
      console.log("currentIndex = "+this.currentIndex);
      
      this.cargarDatos(this.currentIndex);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PreguntasPage');
  }

//Funcion para recuperar las respuestas 

  cargarDatos(index){
    var datos = this.preguntas[index];
    
      this.encuestaSer.getRespuesta(datos.pregunta_id)
        .then(
          data=>{
            console.log(data);
            this.respuestas=data;
          }
          )
        .catch(
          error=>{
            console.log(error);
          }
          )
  }

// funcion para obtener los datos de la sincronizacion
agregarDatos(encuesta_id,pregunta_id,idrespuesta){
    let elementos = {
      idEncuesta: encuesta_id,
      idPregunta: pregunta_id,
      idRespuesta: idrespuesta
    };
    this.db.InsertarDatos(elementos).then((res)=>{
      alert("elemento agregado");
    },(err)=>{
      alert("Error");
    });
}

}
