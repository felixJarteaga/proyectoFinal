import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plantilla-producto-familia',
  templateUrl: './plantilla-producto-familia.page.html',
  styleUrls: ['./plantilla-producto-familia.page.scss'],
})
export class PlantillaProductoFamiliaPage implements OnInit {
  constructor(private router: Router, private rutaActivada: ActivatedRoute) {}

  ngOnInit() {}

  navProductoDetalle() {
    this.router.navigate(['producto-detalle']);
  }
}
