import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosBBDDService } from '../datos-bbdd.service';

@Component({
  selector: 'app-menu-pedido',
  templateUrl: './menu-pedido.page.html',
  styleUrls: ['./menu-pedido.page.scss'],
})
export class MenuPedidoPage implements OnInit {
  familiasList: any[] = [];
  opcionClicada = false;
  constructor(private router: Router, private datosBBDD: DatosBBDDService) {
    this.getFamilias();
  }

  ngOnInit() {}

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

  cambiarContenidoPagina() {
    this.opcionClicada = true;
  }

  navHome() {
    this.router.navigate(['home']);
  }
}
