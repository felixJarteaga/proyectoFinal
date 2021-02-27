import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantillaPedidoPageRoutingModule } from './plantilla-pedido-routing.module';

import { PlantillaPedidoPage } from './plantilla-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantillaPedidoPageRoutingModule
  ],
  declarations: [PlantillaPedidoPage]
})
export class PlantillaPedidoPageModule {}
