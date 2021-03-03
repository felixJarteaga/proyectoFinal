import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'plantilla-pedido',
    loadChildren: () => import('./plantilla-pedido/plantilla-pedido.module').then( m => m.PlantillaPedidoPageModule)
  },
  {
    path: 'plantilla-producto-familia',
    loadChildren: () => import('./plantilla-producto-familia/plantilla-producto-familia.module').then( m => m.PlantillaProductoFamiliaPageModule)
  },  {
    path: 'producto-detalle',
    loadChildren: () => import('./producto-detalle/producto-detalle.module').then( m => m.ProductoDetallePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
