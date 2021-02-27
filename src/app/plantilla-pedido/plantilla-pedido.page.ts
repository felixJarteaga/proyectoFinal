import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plantilla-pedido',
  templateUrl: './plantilla-pedido.page.html',
  styleUrls: ['./plantilla-pedido.page.scss'],
})
export class PlantillaPedidoPage implements OnInit {
  constructor(private router: Router, private rutaActiva: ActivatedRoute) {}

  ngOnInit() {}

  navPlantillaProfuctoFamilia() {
    this.router.navigate(['plantilla-producto-familia']);
  }
}
