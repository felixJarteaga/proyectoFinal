import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoInfoPage } from './producto-info.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoInfoPageRoutingModule {}
