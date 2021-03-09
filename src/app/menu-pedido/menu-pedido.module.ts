import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPedidoPageRoutingModule } from './menu-pedido-routing.module';

import { MenuPedidoPage } from './menu-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPedidoPageRoutingModule
  ],
  declarations: [MenuPedidoPage]
})
export class MenuPedidoPageModule {}
