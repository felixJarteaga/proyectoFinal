import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportePedidoPage } from './importe-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: ImportePedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportePedidoPageRoutingModule {}
