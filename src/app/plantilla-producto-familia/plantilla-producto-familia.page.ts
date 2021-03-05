import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DatosBBDDService } from '../datos-bbdd.service';

@Component({
  selector: 'app-plantilla-producto-familia',
  templateUrl: './plantilla-producto-familia.page.html',
  styleUrls: ['./plantilla-producto-familia.page.scss'],
})
export class PlantillaProductoFamiliaPage implements OnInit {
  productosListFiltradoPorFamiliasPlantilla: any[] = [];
  familiaNombre: string;
  constructor(
    private router: Router,
    private rutaActivada: ActivatedRoute,
    private datosBBDD: DatosBBDDService
  ) {
    this.rutaActivada.queryParamMap.subscribe(() => {
      this.familiaNombre = this.router.getCurrentNavigation().extras.state.nombreFamilia;
      this.getproductosListFiltradoPorFamiliasPlantilla();
    });
  }

  ngOnInit() {}

  async getproductosListFiltradoPorFamiliasPlantilla() {
    this.productosListFiltradoPorFamiliasPlantilla = [];
    await this.datosBBDD.getProductoFamiliaPlantilla(this.familiaNombre);
    this.productosListFiltradoPorFamiliasPlantilla = this.datosBBDD.getproductosListFiltradoPorFamiliasPlantilla();
  }

  navProductoDetalle(idProducto: number) {
    let extrasNavigation: NavigationExtras = {
      state: {
        ProductoId: idProducto,
      },
    };
    this.router.navigate(['producto-detalle'], extrasNavigation);
  }
}
