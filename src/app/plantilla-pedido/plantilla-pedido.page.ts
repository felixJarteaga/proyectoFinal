import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {DatosBBDDService} from '../datos-bbdd.service';
import {CopyService} from '../share/copy.service';

@Component({
  selector: 'app-plantilla-pedido',
  templateUrl: './plantilla-pedido.page.html',
  styleUrls: ['./plantilla-pedido.page.scss'],
})
export class PlantillaPedidoPage implements OnInit {
  familasList: any[] = [];

  constructor(
    private copiaService: CopyService,
    private datosBBDD: DatosBBDDService,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) {
    this.getFamilias();
  }

  ngOnInit() {
  }

  getFamilias() {
    this.familasList = [];
    this.datosBBDD.getFamilias()
      .then((data) => {
        this.familasList = data;
      })
      .catch((err) => {
        console.log('Error en plantilla-pedidos-page-ts: ' + err);
      });

  }

  navPlantillaProfuctoFamilia(nombre: string) {
    const extrasNavigation: NavigationExtras = {
      state: {
        nombreFamilia: nombre,
      },
    };
    this.router.navigate(['plantilla-producto-familia'], extrasNavigation);
  }
}
