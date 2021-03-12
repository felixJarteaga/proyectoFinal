import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportePedidoPageRoutingModule } from './importe-pedido-routing.module';

import { ImportePedidoPage } from './importe-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportePedidoPageRoutingModule
  ],
  declarations: [ImportePedidoPage]
})
export class ImportePedidoPageModule {}
