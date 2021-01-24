import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [PostListComponent, PostFormComponent],

  imports: [CommonModule, ReactiveFormsModule, PostsRoutingModule],
})
export class PostsModule {}
