import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPedidoPage } from './menu-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPedidoPageRoutingModule {}
