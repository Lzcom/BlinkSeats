import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeatroPage } from './teatro.page';

const routes: Routes = [
  {
    path: '',
    component: TeatroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeatroPageRoutingModule {}
