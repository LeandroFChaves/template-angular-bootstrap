import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina2Component } from './pagina2/pagina2.component';

const pagina2Routes: Routes = [
  {
    path: '',
    component: Pagina2Component,
    data: {
      title: 'Página Exemplo 2',
      breadcrumbs: [
        {
          text: 'Home',
          link: '/home',
        },

        {
          text: 'Página 2',
          active: true,
        },
      ],
      roles: ['uma_authorization'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(pagina2Routes)],
  exports: [RouterModule],
})
export class Pagina2RoutingModule {}
