import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosBBDDService } from '../datos-bbdd.service';

@Component({
  selector: 'app-producto-info',
  templateUrl: './producto-info.page.html',
  styleUrls: ['./producto-info.page.scss'],
})
export class ProductoInfoPage implements OnInit {
  productoConcretoList: any[] = [];
  productoId: number;

  constructor(
    private router: Router,
    private rutaActivada: ActivatedRoute,
    private datosBBDD: DatosBBDDService
  ) {
    this.productoId = this.router.getCurrentNavigation().extras.state.productoId;
    console.log(this.productoId);

    this.getProductoConcretoList();
  }

  ngOnInit() {}

  getProductoConcretoList() {
    this.productoConcretoList = [];
    this.datosBBDD
      .getProductoConcreto(this.productoId)
      .then((data) => {
        this.productoConcretoList = data;
        console.log(this.productoConcretoList);
      })
      .catch((err) => {});
  }
}
