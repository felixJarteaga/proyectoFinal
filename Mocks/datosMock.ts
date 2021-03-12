export class DatosMock {

  private objetc = {
    rows: {
      items: [],
      length: 0
    },
    mock: true
  };

  constructor() {

  }

  executeQuery(sql: string) {

    switch (sql) {
      case 'SELECT id as idFamilia,nombreFamilia as nombre FROM familiasProductos ':
        return this.getFamilias();

        break;
      case 'SELECT id as idFamilia,nombreFamilia as nombre FROM familiasProductos WHERE id like"1"':
        return this.getFamiliasId();
        break;
      case  'SELECT productos.nombreProducto as nombreProducto, productos.idProduct as idProducto,\n' +
      '     productos.anadido as anadido FROM productos INNER JOIN familiasProductos ON\n' +
      '     productos.idFamiliaProducto=familiasProductos.id WHERE familiasProductos.nombreFamilia like"Mock"':
        return this.getPlantilla();

        break;
      case  'SELECT productos.idProduct as idProducto, productos.nombreProducto as nombreProducto,productos.precio as precioProducto,productos.descripcion as descripcionProducto,productos.img as img,Marcas.nombreMarca as marca,productos.anadido as anadido FROM productos,Marcas where productos.idFamiliaProducto like 1 AND productos.idMarca=Marcas.id AND productos.anadido=true':
        return this.getProductoAnadido();

        break;

    }
  }

  private getFamilias() {
    const familias = [];

    for (let x = 0; x < 5; x++) {

      familias.push({
        id: 1, nombre: 'Mock'
      });
    }
    this.objetc.rows.length = familias.length;
    this.objetc.rows.items = familias;
    return this.objetc;
  }

  private getFamiliasId() {
    const familias = [];

    const familia = {
      id: 1, nombre: 'Mock'
    };
    familias.push(familia);
    this.objetc.rows.length = familias.length;
    this.objetc.rows.items = familias;
    return this.objetc;
  }

  private getPlantilla() {
    const familias = [];

    for (let x = 0; x < 10; x++) {
      familias.push({
        idProducto: 1, nombreProducto: 'Mock', anadido: false
      });
    }
    this.objetc.rows.length = familias.length;
    this.objetc.rows.items = familias;
    return this.objetc;
  }

  private getProductoAnadido() {
    const familias = [];

    for (let x = 0; x < 3; x++) {

      familias.push({
        idProducto: 1, nombreProducto: 'Mock', precioProducto: 0, descripcionProducto: 'Te vas a enborraxá',
        img: '../../assets/icon/103.jpg', marca: 'Mockeandy', anadido: true
      });
    }
    this.objetc.rows.length = familias.length;
    this.objetc.rows.items = familias;
    return this.objetc;
  }

  private getLastOp() {
    const op = [{
      id: 1, concepto: 'Mock', monto: 300, fondoId: 1, anotacionId: 2, fechaOperacion: new Date()
      , isSpend: true
      , idMes: 321
    }];


    this.objetc.rows.length = op.length;
    this.objetc.rows.items = op;
    return this.objetc;
  }


  private getHistoricos() {
    const historico = [];

    for (let x = 0; x < 5; x++) {

      historico.push({
        id: x, monto: 300, idMes: 321, year: 2021
      });
    }
    this.objetc.rows.length = historico.length;
    this.objetc.rows.items = historico;
    return this.objetc;
  }

  private getUser() {
    const op = [{
      name: 'Mock', fondoName: 'MockMes', montoFondo: 100, idCliente: '#384641Mock', ahorro: 200
    }];


    this.objetc.rows.length = op.length;
    this.objetc.rows.items = op;
    return this.objetc;
  }
}
