import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DatosBBDDService } from '../datos-bbdd.service';
import { CopyService } from '../share/copy.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private copiaService: CopyService,
    private datosBBDD: DatosBBDDService,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) {
    this.copia();
    this.abrir();
  }

  copia() {
    this.copiaService.copiarBBDD();
  }
  abrir() {
    this.datosBBDD.crearBBDD();
  }

  navPlantillaPedido() {
    this.router.navigate(['plantilla-pedido']);
  }
  navMenuPedido() {
    this.router.navigate(['menu-pedido']);
  }
}
