import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConciertosPageRoutingModule } from './conciertos-routing.module';

import { ConciertosPage } from './conciertos.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConciertosPageRoutingModule
  ],
  declarations: [ConciertosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConciertosPageModule {}
