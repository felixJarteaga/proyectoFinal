import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantillaProductoFamiliaPage } from './plantilla-producto-familia.page';

const routes: Routes = [
  {
    path: '',
    component: PlantillaProductoFamiliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantillaProductoFamiliaPageRoutingModule {}
