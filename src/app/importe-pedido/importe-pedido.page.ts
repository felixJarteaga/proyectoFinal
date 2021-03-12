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
  calcularTotalPedido(cantidad: number, precio: number): number {
    if (this.productosDelPedido.length == 0) {
      this.totalPedido = 0;
    } else {
      // this.totalPedido += cantidad * precio;
      this.totalPedido += 10;
    }
    return this.totalPedido;
  }
}
