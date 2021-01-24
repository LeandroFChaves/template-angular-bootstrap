import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { SBRouteData } from './shared/components/breadcrumbs/navigation.model';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home',
      breadcrumbs: [
        {
          text: 'Home',
          active: true,
        },
      ],
    } as SBRouteData,
  },

  {
    path: 'autores',
    loadChildren: './autores/autores.module#AutoresModule',
  },

  {
    path: 'pagina1',
    loadChildren: './pagina1/pagina1.module#Pagina1Module',
  },

  {
    path: 'pagina2',
    loadChildren: './pagina2/pagina2.module#Pagina2Module',
  },

  {
    path: 'posts',
    loadChildren: './posts/posts.module#PostsModule',
  },

  {
    path: 'sobre',
    loadChildren: './sobre/sobre.module#SobreModule',
  },

  {
    path: 'errors',
    loadChildren: './errors/errors.module#ErrorsModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
