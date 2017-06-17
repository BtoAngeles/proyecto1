import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/*
  Generated class for the BaseDatosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BaseDatosProvider {

db: SQLiteObject = null;

  constructor(public sqlite: SQLite) {
    console.log('Hello BaseDatosProvider Provider');
  }

public abrirBD(){
	return this.sqlite.create({
		name: 'data.db',
		location: 'default'
	})
	.then((db: SQLiteObject)=>{
		this.db = db;
		alert("Asignacion de base de datos");
	})
}

public crearTable(){
//	alert("crea tabla");
	return this.db.executeSql("CREATE TABLE IF NOT EXISTS sincronizacion(id INTEGER PRIMARY KEY AUTOINCREMENT, idEncuesta INTEGER, idPregunta INTEGER, idRespuesta INTEGER)",{});
}
public InsertarDatos(elementos: any){
	let sql = 'INSERT INTO sincronizacion(idEncuesta,idPregunta,idRespuesta) VALUES(?,?,?)';
	return this.db.executeSql(sql, [elementos.idEncuesta,elementos.idPregunta,elementos.idRespuesta]);
}

public ObtenerDatos(){
	//alert("obtener datos");
	let sql = "SELECT * FROM sincronizacion";
	return this.db.executeSql(sql,[])
		.then(response =>{
			let elementos = [];
			for(let index = 0; index < response.rows.length; index++){
				elementos.push(response.rows.item(index));
			}
			return Promise.resolve(elementos);
		})
}

public borrar(elemento: any){
	alert("entro a borrar"+ elemento);
	let sql = 'DELETE FROM sincronizacion WHERE id=?';
	return this.db.executeSql(sql, elemento);
}

}
