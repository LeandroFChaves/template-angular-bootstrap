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
    path: 'pagina1',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pagina1/pagina1.module').then((m) => m.Pagina1Module),
  },

  {
    path: 'pagina2',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pagina2/pagina2.module').then((m) => m.Pagina2Module),
  },

  {
    path: 'posts',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },

  {
    path: 'sobre',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./sobre/sobre.module').then((m) => m.SobreModule),
  },

  {
    path: 'errors',
    loadChildren: () =>
      import('./errors/errors.module').then((m) => m.ErrorsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
