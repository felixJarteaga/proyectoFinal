import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatosBBDDService} from '../datos-bbdd.service';

@Component({
  selector: 'app-menu-pedido',
  templateUrl: './menu-pedido.page.html',
  styleUrls: ['./menu-pedido.page.scss'],
})
export class MenuPedidoPage implements OnInit {
  familiasList: any[] = [];
  familiaPorIdList: any[] = [];
  cantidadPedida: number;
  productosListFiltradoPorFamiliasPlantilla: any[] = [];
  opcionClicada = false;

  constructor(private router: Router, private datosBBDD: DatosBBDDService) {
    this.getFamilias();
  }

  ngOnInit() {
  }

  getFamilias() {
    this.familiasList = [];
    this.datosBBDD
      .getFamilias()
      .then((data) => {
        this.familiasList = data;
      })
      .catch((err) => {
        console.log('Error en plantilla-pedidos-page-ts: ' + err);
      });
  }

  cambiarContenidoPagina(id: number) {
    id = 1;
    this.opcionClicada = true;
    this.getFamiliaPorId(id);
    this.getProductosFiltradosPorFamilia(id);
  }

  getFamiliaPorId(id: number) {
    id = 1;
    this.familiaPorIdList = [];
    this.datosBBDD
      .getFamiliaPorId(id)
      .then((data) => {
        this.familiaPorIdList = data;
      })
      .catch((err) => {
        console.log('Error en plantilla-pedidos-page-ts: ' + err);
      });
  }

  getProductosFiltradosPorFamilia(id: number) {
    id = 1;
    this.productosListFiltradoPorFamiliasPlantilla = [];
    this.datosBBDD
      .getProductosListPorIdFamilia(id)
      .then((data) => {
        this.productosListFiltradoPorFamiliasPlantilla = data;
      })
      .catch((err) => {
        console.log('Error en plantilla-pedidos-page-ts: ' + err);
      });
  }

  navHome() {
    this.router.navigate(['home']);
  }

  borrarProductoDeLaPlantilla(id: number) {
    this.datosBBDD.actualizarProductoConcretoComoNoAnnadido(id);
    alert('Produto eliminado de la plantilla');
    this.router.navigate(['home']);
  }

  addProductoAPedido(nombre: string, precio: number, cantidad: number) {
    cantidad = this.cantidadPedida;
    this.datosBBDD.insertarProdutoPedido(nombre, precio, cantidad);
    this.router.navigate(['home']);
  }
}
