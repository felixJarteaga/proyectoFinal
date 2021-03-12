import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosBBDDService } from '../datos-bbdd.service';

@Component({
  selector: 'app-importe-pedido',
  templateUrl: './importe-pedido.page.html',
  styleUrls: ['./importe-pedido.page.scss'],
})
export class ImportePedidoPage implements OnInit {
  productosDelPedido: any[] = [];
  totalPedido: number;
  constructor(private router: Router, private datosBBDD: DatosBBDDService) {
    this.getProductosPedido();
  }

  ngOnInit() {}

  navHome() {
    this.router.navigate(['home']);
  }
  eliminarPedido() {
    this.datosBBDD.eliminarPedido();
    this.router.navigate(['home']);
  }
  getProductosPedido() {
    this.productosDelPedido = [];
    this.datosBBDD
      .getProductosDelPedido()
      .then((data) => {
        this.productosDelPedido = data;
      })
      .catch((err) => {
        console.log('Error en importe-pedido-page-ts: ' + err);
      });
  }
  borrarProductoDelPedido(id: number) {
    this.datosBBDD.borrarFilaPedido(id);
    this.router.navigate(['home']);
  }
  calcularTotalPedido() {
    this.productosDelPedido.forEach((e) => {
      console.log(e);
      this.totalPedido += (e.precio * e.cantidadProducto);
    });

  }
}
