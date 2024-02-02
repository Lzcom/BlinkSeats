import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeatroPageRoutingModule } from './teatro-routing.module';

import { TeatroPage } from './teatro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeatroPageRoutingModule
  ],
  declarations: [TeatroPage]
})
export class TeatroPageModule {}
