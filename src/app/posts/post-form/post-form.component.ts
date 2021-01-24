import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  formPost: FormGroup;
  postId: number;
  isReadOnly: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) {
    const post = this.router.getCurrentNavigation().extras.state;

    if (post) {
      this.isReadOnly = post.detalhes;
    }
  }

  ngOnInit(): void {
    this.formPost = this.formBuilder.group({
      id: [''],
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      body: ['', [Validators.required, Validators.maxLength(10)]],
    });

    this.route.params
      .pipe(
        map((params: any) => params.id),
        switchMap((id) => {
          if (id) {
            return this.postsService.findById(parseInt(id));
          }

          return EMPTY;
        })
      )
      .subscribe((conta) => {
        this.updateForm(conta);
      });

    if (this.isReadOnly) {
      this.formPost.disable();
    }
  }

  hasError(field: string) {
    return this.formPost.get(field).errors;
  }

  salvar() {
    if (this.formPost.valid && !this.formPost.pending) {
      const post: Post = this.formPost.getRawValue() as Post;

      this.postsService.salvar(post, true).subscribe(() => {
        this.router.navigate(['posts']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/posts']);
    this.formPost.reset();
  }

  private updateForm(post: Post): void {
    this.formPost.patchValue({
      id: post.id,
      title: post.title,
      body: post.body,
    });
  }
}
