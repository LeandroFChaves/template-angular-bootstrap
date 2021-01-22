import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  paginas: any = [];
  menuGrupo1: any[] = [];
  menuGrupo2: any[] = [];
  isShown: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.menuGrupo1 = [
      { pagina: 'pagina1', descricao: 'Página Exemplo 1', grupo: 'grupo2' },
      { pagina: 'pagina2', descricao: 'Página Exemplo 2', grupo: 'grupo2' },
    ];

    this.menuGrupo2 = [
      { pagina: 'errors/403', descricao: 'Erro 403', grupo: 'grupo2' },
      { pagina: 'errors/404', descricao: 'Erro 404', grupo: 'grupo2' },
      { pagina: 'errors/500', descricao: 'Erro 500', grupo: 'grupo2' },
      { pagina: 'errors/503', descricao: 'Erro 503', grupo: 'grupo2' },
      { pagina: 'errors/504', descricao: 'Erro 504', grupo: 'grupo2' },
    ];
  }

  toggle() {
    this.isShown = !this.isShown;
  }

  exibeMenu(component: string, link: any) {
    const menu = document.getElementById(component);

    if (!menu.classList.contains('collapse')) {
      menu.classList.add('collapse');
      link.setAttribute('aria-expanded', 'false');
    } else {
      menu.classList.remove('collapse');
      link.setAttribute('aria-expanded', 'true');
    }
  }

  logout() {}
}
