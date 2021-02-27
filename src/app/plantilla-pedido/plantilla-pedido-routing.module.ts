import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantillaPedidoPage } from './plantilla-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: PlantillaPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantillaPedidoPageRoutingModule {}
