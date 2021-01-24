import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { DataSourceService } from '../core/services/datasource.service';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends DataSourceService<Post, number> {
  constructor(protected http: HttpClient) {
    super(http, `${environment.urlApi}/posts`);
  }
}
