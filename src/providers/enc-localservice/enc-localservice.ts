import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EncLocalserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EncLocalserviceProvider {
private id_encuesta;
  constructor(public http: Http) {
    console.log('Hello EncLocalserviceProvider Provider');
  }
setId_encuesta(value){
this.id_encuesta = value;
console.log("variable local "+value);

}
getId_encuesta(){
	console.log("variable local get");
	return this.id_encuesta;
}
}
