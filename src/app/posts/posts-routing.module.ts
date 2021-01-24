import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';

const postsRoutes: Routes = [
  {
    path: '',
    component: PostListComponent,
    data: {
      title: 'Posts',
      breadcrumbs: [
        {
          text: 'Home',
          link: '/home',
        },

        {
          text: 'Posts',
          active: true,
        },
      ],
      roles: ['uma_authorization'],
    },
  },
  { path: 'novo', component: PostFormComponent },
  { path: 'editar/:id', component: PostFormComponent },
  { path: 'detalhes/:id', component: PostFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
