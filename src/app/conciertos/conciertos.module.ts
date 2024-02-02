import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConciertosPageRoutingModule } from './conciertos-routing.module';

import { ConciertosPage } from './conciertos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConciertosPageRoutingModule
  ],
  declarations: [ConciertosPage]
})
export class ConciertosPageModule {}
