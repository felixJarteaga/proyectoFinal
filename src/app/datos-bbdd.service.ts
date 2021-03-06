import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import {Platform} from '@ionic/angular';
import {CopyService} from './share/copy.service';

@Injectable({
  providedIn: 'root',
})
export class DatosBBDDService {
  private db: SQLiteObject;


  constructor(
    private platform: Platform,
    private sqlite: SQLite
  ) {
  }

  ejecutarQuery(sqlSentence: string, searchParam: any[]) {
    return new Promise<any[]>((resolve, reject) => {
      this.comprobarBBDD()
        .then(() => {
          this.db.executeSql(sqlSentence, searchParam)
            .then((data) => {
              const target = [];
              for (let i = 0; i < data.rows.length; i++) {
                const obj = data.rows.item(i);
                target.push(obj);
              }
              resolve(target);
            })
            .catch((err) => {
              console.log('fallo al ejecutar sentencia ' + JSON.stringify(err));
              reject(err);
            });
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });


  }

  comprobarBBDD() {
    return new Promise<void>((resolve, reject) => {
      if (!this.db) {
        this.crearBBDD()
          .then(() => resolve())
          .catch((err) => reject(err));
      } else {
        resolve();
      }
    });


  }

  crearBBDD() {
    return new Promise<string>((resolve, reject) => {
      this.platform.ready()
        .then(() => {
          console.log('la plataforma está lista');
          this.sqlite.create(this.getConector())
            .then((db: SQLiteObject) => {
              this.db = db;
              console.log('ya tenemos nuestra BBDD');
              console.log('------');
              resolve('ya tenemos nuestra BBDD');
            })
            .catch((e) => console.log(e));
        })
        .catch((err) => {
          console.log('la plataforma no esta lista');
          console.log('Error debido a: ' + err);
          reject(err);
        });
    });

  }

  private getConector() {
    return {
      name: 'cashBarea.db',
      location: 'default',
      createFromLocation: 1,
    };
  }


  getFamilias() {
    const sql = 'SELECT nombreFamilia as nombre FROM familiasProductos';
    // Estas lineas son iguales para cada metodo Query
    return new Promise<any[]>((resolve, reject) =>
      this.ejecutarQuery(sql, [])
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err))
    );

  }

  getProductoFamiliaPlantilla(familia: string) {
    const sql = `SELECT productos.nombreProducto as nombreProducto, productos.idProduct as idProducto FROM productos INNER JOIN familiasProductos ON productos.idFamiliaProducto=familiasProductos.id WHERE familiasProductos.nombreFamilia like"${familia}"`;
    return new Promise<any[]>((resolve, reject) =>
      this.ejecutarQuery(sql, [])
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err))
    );
  }

  getProductoConcreto(idProducto: number) {
    const sql = `SELECT productos.nombreProducto as nombreProducto,productos.precio as precioProducto,productos.descripcion as descripcionProducto,productos.img as img,Marcas.nombreMarca as marca FROM productos,Marcas where productos.idProduct="${idProducto}" AND productos.idMarca=Marcas.id`;
    return new Promise<any[]>((resolve, reject) =>
      this.ejecutarQuery(sql, [])
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err))
    );
  }


}
