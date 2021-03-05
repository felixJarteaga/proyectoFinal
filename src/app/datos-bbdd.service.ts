import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { CopyService } from './share/copy.service';

@Injectable({
  providedIn: 'root',
})
export class DatosBBDDService {
  private db: SQLiteObject;
  private familiaList: any[] = [];
  private productosListFiltradoPorFamiliasPlantilla: any[] = [];
  private productoConcreto: any[] = [];
  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private copy: CopyService
  ) {}

  async executeSentence(
    target: any[],
    sqlSentence: string,
    searchParam: any[]
  ) {
    let consultable = true;
    if (!this.db) {
      await this.crearBBDD()
        .then()
        .catch(() => {
          consultable = false;
        });
    }
    if (consultable) {
      this.db
        .executeSql(sqlSentence, searchParam)
        .then((data) => {
          // target = [];
          for (let i = 0; i < data.rows.length; i++) {
            let obj = data.rows.item(i);

            target.push(obj);
          }
        })
        .catch((err) => {
          console.log('fallo al ejecutar sentencia ' + JSON.stringify(err));
        });
    }
  }

  async getFamilias() {
    this.familiaList = [];
    const sql = 'SELECT nombreFamilia as nombre FROM familiasProductos';
    await this.executeSentence(this.familiaList, sql, []);
  }
  async getProductoFamiliaPlantilla(familia: string) {
    this.productosListFiltradoPorFamiliasPlantilla = [];
    const sql = `SELECT productos.nombreProducto as nombreProducto, productos.idProduct as idProducto FROM productos INNER JOIN familiasProductos ON productos.idFamiliaProducto=familiasProductos.id WHERE familiasProductos.nombreFamilia like"${familia}"`;
    await this.executeSentence(
      this.productosListFiltradoPorFamiliasPlantilla,
      sql,
      []
    );
  }

  async getProductoConcreto(idProducto: number) {
    this.productoConcreto = [];
    const sql = `SELECT productos.nombreProducto as nombreProducto,productos.precio as precioProducto,productos.descripcion as descripcionProducto,productos.img as img,Marcas.nombreMarca as marca FROM productos,Marcas where productos.idProduct="${idProducto}" AND productos.idMarca=Marcas.id`;
    await this.executeSentence(this.productoConcreto, sql, []);
  }

  async crearBBDD() {
    await this.platform
      .ready()
      .then(async () => {
        console.log('la plataforma está lista');

        await this.sqlite
          .create(this.getConector())
          .then((db: SQLiteObject) => {
            this.db = db;
            console.log('ya tenemos nuestra BBDD');
            console.log('------');
          })
          .catch((e) => console.log(e));
      })
      .catch((err) => {
        console.log('la plataforma no esta lista');
        console.log('Error debido a: ' + err);
      });
  }
  private getConector() {
    return {
      name: 'cashBarea.db',
      location: 'default',
      createFromLocation: 1,
    };
  }

  getFamiliaList() {
    return this.familiaList;
  }
  getproductosListFiltradoPorFamiliasPlantilla() {
    return this.productosListFiltradoPorFamiliasPlantilla;
  }
  getProductosConcretosList() {
    return this.productoConcreto;
  }
}
