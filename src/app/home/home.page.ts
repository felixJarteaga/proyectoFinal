import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router, private rutaActiva: ActivatedRoute) {}

  navPlantillaPedido() {
    this.router.navigate(['plantilla-pedido']);
  }
}
