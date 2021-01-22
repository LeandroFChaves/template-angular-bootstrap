import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina1Component } from './pagina1/pagina1.component';

const pagina1Routes: Routes = [
  {
    path: '',
    component: Pagina1Component,
    data: {
      title: 'Página Exemplo 1',
      breadcrumbs: [
        {
          text: 'Home',
          link: '/home',
        },

        {
          text: 'Página 1',
          active: true,
        },
      ],
      roles: ['uma_authorization'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(pagina1Routes)],
  exports: [RouterModule],
})
export class Pagina1RoutingModule {}
