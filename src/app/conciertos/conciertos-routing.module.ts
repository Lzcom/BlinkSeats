import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConciertosPage } from './conciertos.page';

const routes: Routes = [
  {
    path: '',
    component: ConciertosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConciertosPageRoutingModule {}
