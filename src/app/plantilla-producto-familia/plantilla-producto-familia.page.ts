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

  getproductosListFiltradoPorFamiliasPlantilla() {
    this.productosListFiltradoPorFamiliasPlantilla = [];
    this.datosBBDD
      .getProductoFamiliaPlantilla(this.familiaNombre)
      .then((data) => {
        this.productosListFiltradoPorFamiliasPlantilla = data;
      })
      .catch((err) => {});
  }

  navProductoInfo(idProducto: number) {
    console.log(idProducto);

    const extrasNavigation: NavigationExtras = {
      state: {
        productoId: idProducto,
      },
    };
    this.router.navigate(['producto-info'], extrasNavigation);
  }
  AddProductoALaPlantilla(id: number, nombre: string) {
    this.datosBBDD.actualizarProductoConcretoComoAnnadido(id);
    alert('Produto ' + nombre + ' añadido a tu plantilla');
    this.router.navigate(['plantilla-pedido']);
  }
}
