import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { Post } from './../post.model';
import { PostsService } from './../posts.service';
import { NotificationsService } from './../../shared/components/notifications/notifications.service';
import { ModalsService } from './../../shared/components/modals/modals.service';
import { UtilsService } from './../../core/services/utils.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService,
    private modalService: ModalsService,
    private notificationService: NotificationsService,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.listPosts();
  }

  listPosts() {
    this.postsService.listAll().subscribe(
      (posts) => {
        this.posts = posts;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  detalhes(post: Post) {
    const navigationExtras: NavigationExtras = {
      relativeTo: this.route,
      state: { detalhes: true },
    };

    this.router.navigate(['detalhes', post.id], navigationExtras);
  }

  editar(post: Post) {
    this.router.navigate(['editar', post.id], { relativeTo: this.route });
  }

  excluir(post: Post) {
    this.modalService
      .showConfirm('Excluir', 'Deseja realmente excluir o post?', 'Sim', 'Não')
      .subscribe((success) => {
        if (success) {
          this.postsService.excluir(post.id).subscribe(
            () => {
              this.notificationService.success(
                'Registro excluído com sucesso.'
              );

              this.posts = this.utilsService.excluirObjetoGrid<Post>(
                this.posts,
                'id',
                post.id
              );
            },
            (error) => {
              console.log(
                'Erro ao excluir o post. Tente novamente mais tarde.' + error
              );
            }
          );
        }
      });
  }
}
