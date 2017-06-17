import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EncuestaServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EncuestaServiceProvider {
//link:string = "http://192.168.50.11/";
//link:string = "http://localhost/";
link:string = "http://192.168.0.50/";

  constructor(public http: Http) {
    console.log('Hello EncuestaServiceProvider Provider');
  }
getEncuesta(){
	return new Promise(
			resolve=>{
				this.http.get(this.link+'prueba/all')
				.map(res=>res.json())
				.subscribe(
						data=>{
							resolve(data);
						},
						err=>{
							console.log(err);
						}
					)

			}
		);
}

getEncEspecif(id){
	return new Promise(
			resolve=>{
				this.http.get(this.link+'prueba/one/'+id)
				.map(resp=>resp.json())
				.subscribe(
						data=>{
							resolve(data);
						},
						err=>{
							console.log(err);
						}
					)
			}
		);
}

addComentario(data){
	return new Promise(
			resolve=>{
				this.http.post(this.link+'prueba/add',data)
				.map(resp=>resp.json())
				.subscribe(
						data=>{
							resolve(data);
						},
						err=>{
							console.log(err);
						}
					)
			}
		);
}


getRespuesta(id){
	return new Promise(
			resolve=>{
				this.http.get(this.link+'prueba/respuesta/'+id)
				.map(resp=>resp.json())
				.subscribe(
						data=>{
							resolve(data);
						},
						err=>{
							console.log(err);
						}
					)
			}
		);
}


modificarDatos(id){
	return new Promise(
		resolve=>{
			this.http.get(this.link+'prueba/updateVeces/'+id)
				.map(resp=>resp.json())
				.subscribe(
					data=>{
						resolve(data);
					},
					err=>{
						console.log(err);
					}
				)
		});
}



}
