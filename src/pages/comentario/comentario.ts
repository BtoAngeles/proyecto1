import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EncuestaServiceProvider } from '../../providers/encuesta-service/encuesta-service';
import { EncLocalserviceProvider} from '../../providers/enc-localservice/enc-localservice';




/**
 * Generated class for the ComentarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-comentario',
  templateUrl: 'comentario.html',
})
export class ComentarioPage {
datos : any = {};

nombre;
correo;
comentario;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public encuestaSer: EncuestaServiceProvider,public encLocal: EncLocalserviceProvider,
  	public alertCtrl: AlertController) {
      this.nombre="";
      this.correo="";
      this.comentario="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComentarioPage');
  }


enviar(){
    var datos = {};
    datos["nombre"]=this.nombre;
    datos["correo"]=this.correo;
    datos["comentario"]=this.comentario;
    this.encuestaSer.addComentario(datos)
        .then(
            data=> {
                let alert = this.alertCtrl.create({
                          title: "Dato añadido",
                          subTitle: this.nombre+" "+this.correo,
                          buttons: ["OK"]
                        });
                      alert.present();
            }
          )
        .catch(
            error=>{
              console.log(error);
            }
          )
    }


}

