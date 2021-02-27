import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantillaProductoFamiliaPageRoutingModule } from './plantilla-producto-familia-routing.module';

import { PlantillaProductoFamiliaPage } from './plantilla-producto-familia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantillaProductoFamiliaPageRoutingModule
  ],
  declarations: [PlantillaProductoFamiliaPage]
})
export class PlantillaProductoFamiliaPageModule {}
