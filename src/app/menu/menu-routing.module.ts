import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [{

      path: "inicio",
      loadChildren: () =>
      import("../inicio/inicio.module").then(m =>m.InicioPageModule)
    },
    {
      
        path: 'deportes',
        loadChildren:() => import('../deportes/deportes.module').then(m => m.DeportesPageModule)
       ,
    },
    {
      path: 'conciertos',
      loadChildren:() => import('../conciertos/conciertos.module').then(m => m.ConciertosPageModule)
    
    }]


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
