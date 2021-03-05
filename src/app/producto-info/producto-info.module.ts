import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoInfoPageRoutingModule } from './producto-info-routing.module';

import { ProductoInfoPage } from './producto-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoInfoPageRoutingModule
  ],
  declarations: [ProductoInfoPage]
})
export class ProductoInfoPageModule {}
