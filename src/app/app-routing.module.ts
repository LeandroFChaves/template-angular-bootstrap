import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth/auth.guard';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { SBRouteData } from './shared/components/breadcrumbs/navigation.model';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
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
    canActivate: [AuthGuard],
    loadChildren: './autores/autores.module#AutoresModule',
  },

  {
    path: 'pagina1',
    canActivate: [AuthGuard],
    loadChildren: './pagina1/pagina1.module#Pagina1Module',
  },

  {
    path: 'pagina2',
    canActivate: [AuthGuard],
    loadChildren: './pagina2/pagina2.module#Pagina2Module',
  },

  {
    path: 'posts',
    canActivate: [AuthGuard],
    loadChildren: './posts/posts.module#PostsModule',
  },

  {
    path: 'sobre',
    canActivate: [AuthGuard],
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
